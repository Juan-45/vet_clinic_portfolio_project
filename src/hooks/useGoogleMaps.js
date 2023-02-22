import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useCallback, useMemo } from "react";

const useGoogleMaps = ({ locationsSettings, initialSettings, iconUrl }) => {
  const mapContainer = useRef();

  const getArrs = useCallback((locationsSettings) => {
    const markersLocationsArr = [];
    const infoWindowsDetailsArr = [];
    const panoramaSettingsArr = [];
    Object.entries(locationsSettings).forEach((item) => {
      const locationsSettingsOfOneCity = item[1];

      locationsSettingsOfOneCity.forEach((obj) => {
        const { zone, address, phone } = obj;
        infoWindowsDetailsArr.push({
          zone,
          address,
          phone,
        });
        markersLocationsArr.push(obj.centerMapSettings.coordinates);
        panoramaSettingsArr.push(obj.panoramaSettings);
      });
    });
    return { markersLocationsArr, infoWindowsDetailsArr, panoramaSettingsArr };
  }, []);

  const { markersLocationsArr, infoWindowsDetailsArr, panoramaSettingsArr } =
    useMemo(() => getArrs(locationsSettings), [getArrs, locationsSettings]);

  const gpsButtonHtml = '<button class="gpsButton" id="gpsButton">GPS</button>';

  const streetViewButton =
    '<button class="streetButton" id="streetButton">Vista en calle</button>';

  const htmlStringArr = useMemo(
    () =>
      infoWindowsDetailsArr.map((item) => {
        return (
          '<div class="infoWindowContainer">' +
          `<span class="infoWindowText infoWindowTitle">${item.zone}</span>` +
          `<span class="infoWindowText infoWindowP">${item.address}</span>` +
          `<span class="infoWindowText infoWindowP">${item.phone}</span>` +
          '<div class="infoWindowsButtonContainer">' +
          gpsButtonHtml +
          streetViewButton +
          "</div></div>"
        );
      }),
    [infoWindowsDetailsArr]
  );

  const gpsButtonHanlder = useCallback((location) => {
    const { lng, lat } = location;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  }, []);

  const streetViewInfoWindowButtonHandler = useCallback(
    ({ panoramaSettings, coordinates, panoramaInstance }) => {
      const { pov, zoom } = panoramaSettings;
      panoramaInstance.setOptions({
        position: { lat: coordinates[0], lng: coordinates[1] },
        pov,
        zoom,
      });
      panoramaInstance.setVisible(true);
    },
    []
  );

  const addHandlers = useCallback(
    ({ coordinates, panoramaInstance, panoramaSettings }) => {
      const lat = coordinates[0];
      const lng = coordinates[1];
      document
        .getElementById("gpsButton")
        .addEventListener("click", () => gpsButtonHanlder({ lat, lng }));
      document.getElementById("streetButton").addEventListener("click", () =>
        streetViewInfoWindowButtonHandler({
          panoramaSettings,
          coordinates,
          panoramaInstance,
        })
      );
    },
    [gpsButtonHanlder, streetViewInfoWindowButtonHandler]
  );

  const getLoader = () =>
    new Loader({
      apiKey: "AIzaSyCbSnTujuqOYPv-NXP27fjZx_oD93FN--g",
      version: "weekly",
    });

  const createNewMarkers = useCallback(
    ({
      mapInstance,
      panoramaInstance,
      markersLocationsArr,
      htmlStringArr,
      panoramaSettingsArr,
    }) => {
      const latLng = (lat, lng) => new window.google.maps.LatLng(lat, lng);

      const infoWindow = new window.google.maps.InfoWindow({});

      for (let i = 0; i < markersLocationsArr.length; i++) {
        const currentPosition = markersLocationsArr[i];
        const currentHTMLContent = htmlStringArr[i];
        const currentPanoramaSettings = panoramaSettingsArr[i];

        const marker = new window.google.maps.Marker({
          position: latLng(currentPosition[0], currentPosition[1]),
          icon: {
            url: iconUrl,
            scaledSize: { height: 45, width: 45 },
          },
          map: mapInstance,
        });

        marker.addListener("click", () => {
          infoWindow.setContent(currentHTMLContent);
          infoWindow.open({
            anchor: marker,
            map: mapInstance,
            shouldFocus: false,
          });
          infoWindow.addListener("domready", () => {
            addHandlers({
              coordinates: currentPosition,
              panoramaInstance,
              panoramaSettings: currentPanoramaSettings,
            });
          });
          infoWindow.addListener("content_changed", () => {
            window.google.maps.event.clearListeners(infoWindow, "domready");
          });
        });
      }
    },
    [addHandlers, iconUrl]
  );

  const createMap = useCallback(
    ({ loader }) =>
      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          const map = new window.google.maps.Map(
            mapContainer.current,
            initialSettings
          );
          const panorama = new window.google.maps.StreetViewPanorama(
            mapContainer.current,
            {
              enableCloseButton: true,
              visible: false,
            }
          );
          createNewMarkers({
            mapInstance: map,
            panoramaInstance: panorama,
            markersLocationsArr,
            htmlStringArr,
            panoramaSettingsArr,
          });
        }
      }),
    [
      createNewMarkers,
      htmlStringArr,
      markersLocationsArr,
      panoramaSettingsArr,
      initialSettings,
    ]
  );

  useEffect(() => {
    const loader = getLoader();
    createMap({ loader });
  }, [createMap, initialSettings]);

  return {
    mapContainer,
  };
};

export default useGoogleMaps;

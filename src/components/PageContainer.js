import { useMemo } from "react";
import Footer from "components/Footer";
import { Box } from "@mui/material";
import NavBar from "components/NavBar";
import { styled } from "@mui/material/styles";
import pin_c from "assets/pin_c.png";
import useGoogleMaps from "hooks/useGoogleMaps";
import "components/footer/InfoWindow.css";

const PageContainer = ({ children, navBarOptions, footerOptions }) => {
  const locationsSettings = useMemo(
    () => ({
      rosario: [
        {
          zone: "Centro",
          address: "Pellegrini 3200",
          phone: "444-444-444",
          key: "key1",
          centerMapSettings: {
            zoom: 18,
            coordinates: [-32.9520904, -60.6697402],
          },
          panoramaSettings: {
            pov: { heading: 100, pitch: 0 },
            zoom: 2,
          },
        },
      ],
    }),
    []
  );

  const initialSettings = useMemo(
    () => ({
      center: {
        lat: -32.9520904,
        lng: -60.6697402,
      },
      zoom: 14,
    }),
    []
  );

  const { mapContainer } = useGoogleMaps({
    locationsSettings,
    initialSettings,
    iconUrl: pin_c,
  });

  const Container = styled(Box)({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <Container>
      <NavBar {...navBarOptions} />
      {children}
      <Footer {...footerOptions} ref={mapContainer} />
    </Container>
  );
};

export default PageContainer;

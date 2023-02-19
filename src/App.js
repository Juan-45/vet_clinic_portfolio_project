import React from "react";
import MainContainer from "components/MainContainer";
import PageRender from "components/PageRender";
import PageContainer from "components/PageContainer";
import ScrollToTop from "components/ScrollToTop";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "theme/theme";
import LOGO_125x125 from "assets/LOGO_125x125_c.png";

const App = () => {
  const HOME_URL = "/";
  const APPOINTMENT_URL = "/appointment";

  const navigationOptions = [
    {
      to: HOME_URL,
      label: "Home",
      element:<div style={{ height: "100vh" }}>"HOME"</div>,
    },
    {
      to: "/about",
      label: "Acerca de",
      element: <div style={{ height: "100vh" }}>"ACERCA DE"</div>,
    },
    {
      to: "/services",
      label: "Servicios",
      element: <div>"SERVICIOS"</div>,
    },
    {
      to: APPOINTMENT_URL,
      label: "Solicitar turno",
      element: <div>"SOLICITAR TURNO"</div>,
    },
    {
      // to: "/", this props was omited deliberately
      label: "Recursos",
      nested: [
        {
          to: "/resources/contact",
          label: "Contáctanos",
          element: <div>"CONTACTANOS"</div>,
        },
        {
          to: "/resources/faq",
          label: "FAQ",
          element: <div>"FAQ"</div>,
        },
        {
          to: "/resources/rate_us",
          label: "Califícanos",
          element: <div>"CALIFÍCANOS"</div>,
        },
      ],
    },
  ];

  const navBarOptions = {
    navigationOptions,
    withLogo: true,
    logoOptions: {
      homeUrl: HOME_URL,
      imgUrl: LOGO_125x125,
    },
  };

  const mapNested = (arr) => {
    const result = [];

    arr.forEach((item) => {
      if (item.nested === undefined) {
        result.push({
          to: item.to,
          element: item.element,
        });
      } else {
        item.nested.forEach((nestedItem) =>
          result.push({
            to: nestedItem.to,
            element: nestedItem.element,
          })
        );
      }
    });

    return result;
  };

  const routesOptions = mapNested(navigationOptions);

  const footerOptions = {
    homeUrl: HOME_URL,
    imgUrl: LOGO_125x125,
  };

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop>
        <CssBaseline enableColorScheme injectFirst />
        <MainContainer>
          <PageContainer
            navBarOptions={navBarOptions}
            footerOptions={footerOptions}
          >
            <PageRender routesOptions={routesOptions} />
          </PageContainer>
        </MainContainer>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;

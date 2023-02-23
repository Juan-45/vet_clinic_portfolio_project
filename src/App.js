import React from "react";
import MainContainer from "components/MainContainer";
import PageRender from "components/PageRender";
import PageContainer from "components/PageContainer";
import ScrollToTop from "components/ScrollToTop";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "theme/theme";
import LOGO_125x125 from "assets/LOGO_125x125_c.png";
import Home from "pages/Home";
import OurStory from "pages/OurStory";
import OurTeam from "pages/OurTeam";
import Services from "pages/Services";

const App = () => {
  const HOME_URL = "/";
  const APPOINTMENT_URL = "/appointment";
  const CONTACT_URL = "/resources/contact";
  const SERVICES_URL = "/services";

  const navigationOptions = [
    {
      to: HOME_URL,
      label: "Home",
      element: (
        <Home
          links={{
            appointment: APPOINTMENT_URL,
            contact: CONTACT_URL,
            services: SERVICES_URL,
          }}
        />
      ),
    },
    {
      label: "Acerca de",
      nested: [
        {
          to: "/about/story",
          label: "Nuestra historia",
          element: <OurStory />,
        },
        {
          to: "/about/team",
          label: "Nuestro equipo",
          element: <OurTeam />,
        },
      ],
    },

    {
      to: SERVICES_URL,
      label: "Servicios",
      element: <Services links={{ appointment: APPOINTMENT_URL }} />,
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
          to: CONTACT_URL,
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

  const extraRoutes = [
    {
      path: "*",
      element: <div>ERROR 404</div>,
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

  const mapNested = (arr, extraRoutes) => {
    const result = [];

    arr.forEach((item) => {
      if (item.nested === undefined) {
        result.push({
          path: item.to,
          element: item.element,
        });
      } else {
        item.nested.forEach((nestedItem) =>
          result.push({
            path: nestedItem.to,
            element: nestedItem.element,
          })
        );
      }
    });

    return result.concat(extraRoutes);
  };

  const routesOptions = mapNested(navigationOptions, extraRoutes);

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

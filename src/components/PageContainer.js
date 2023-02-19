import Footer from "components/Footer";
import { Box } from "@mui/material";
import NavBar from "components/NavBar";

const PageContainer = ({ children, navBarOptions, footerOptions }) => {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <NavBar {...navBarOptions} />
      {children}
      <Footer {...footerOptions} />
    </Box>
  );
};

export default PageContainer;

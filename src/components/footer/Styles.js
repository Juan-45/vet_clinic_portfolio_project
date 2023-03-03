import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { FlexRowCenter, StyledLink } from "components/CommonStyles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  width: "100%",
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(16),
  background: theme.palette.secondary.main,
}));

const MapContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "400px",
  width: "100%",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "65%",
  },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  width: "100%",
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "35%",
  },
}));

const InfoItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(3),
  "&.attributionsContainer": {
    [theme.breakpoints.up("mobile_max_750")]: {
      maxWidth: "calc(33.33% - 16px)",
    },
    [theme.breakpoints.up("tablet_min_900")]: {
      maxWidth: "calc(25% - 16px)",
    },
    [theme.breakpoints.down("mobile_max_750")]: {
      maxWidth: "calc(50% - 16px)",
    },
  },
}));

const StyledFlexRowCenter = styled(FlexRowCenter)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontWeight: 600,
}));

const InfoText = styled(StyledTypography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

const FooterLink = styled(StyledLink)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  "&::after": {
    position: "absolute",
    content: "''",
    bottom: 0,
    left: 0,
    background: theme.palette.text.white,
    height: "3px",
    width: "100%",
  },
  "&:hover": {
    background: theme.palette.background.transparent,
  },
}));

const Anchor = ({ children, ...props }) => (
  <a
    target='_blank'
    rel='noreferrer'
    style={{ paddingRight: "8px" }}
    {...props}
  >
    {children}
  </a>
);

export {
  Container,
  MapContainer,
  InfoContainer,
  InfoItemContainer,
  StyledFlexRowCenter,
  StyledTypography,
  InfoText,
  FooterLink,
  Anchor,
};

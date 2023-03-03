import { Box, Typography } from "@mui/material";
import { AfterSquareContainer } from "components/CommonStyles";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}));

const InnerContainer = styled(AfterSquareContainer)({
  "&.innerContainerWithImg": {
    position: "initial",
    "&::after": {
      content: "unset",
    },
    display: "flex",
    alignItems: "start",
    width: "100%",
    flexWrap: "wrap",
  },
});

const ParagraphContainer = styled(Box)(({ theme }) => ({
  border: `3px solid ${theme.palette.ternary.medium}`,
  borderRightWidth: "0px",
  padding: theme.spacing(2),
  background: theme.palette.background.default,
  boxShadow: theme.shadows[2],
  "&.paragraphContainerBesideImg": {
    [theme.breakpoints.up("tablet_min_900")]: {
      maxWidth: "50%",
    },
  },
}));

const ImgPositioning = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "50%",
    paddingTop: "0px",
    paddingLeft: theme.spacing(4),
  },
}));

const ImageContainer = styled(AfterSquareContainer)(({ theme }) => ({
  display: "flex",
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  boxShadow: theme.shadows[2],
  width: "100%",
  maxWidth: "500px",
  display: "block",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Bold = styled("span")({
  fontWeight: 600,
});

export {
  Container,
  InnerContainer,
  ParagraphContainer,
  Paragraph,
  ImgPositioning,
  ImageContainer,
  StyledImg,
  Bold,
};

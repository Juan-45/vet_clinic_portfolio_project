import { Box, Typography } from "@mui/material";
import { MediumContainer } from "components/CommonStyles";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import mergician from "mergician";

const fade_left = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateX(-50px)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0px)",
  },
});

const fade_right = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateX(50px)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0px)",
  },
});

const fade = keyframes({
  "0%": {
    opacity: "0",
    visibility: "hidden",
  },
  "100%": {
    opacity: "1",
    visibility: "visible",
  },
});

const ANIMATION_TIME = 0.7;
const FADE_LEFT_DELAY = 1;
const FADE_RIGHT_DELAY = 1.4;
const FADE_DELAY = 2.1;

const sideFadeStyles = {
  left: {
    opacity: "0",
    transform: "translateX(-50px)",
    animation: `${ANIMATION_TIME}s ease ${FADE_LEFT_DELAY}s forwards ${fade_left}`,
  },
  right: {
    opacity: "0",
    transform: "translateX(50px)",
    animation: `${ANIMATION_TIME}s ease ${FADE_RIGHT_DELAY}s forwards ${fade_right}`,
  },
};

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  background: "gray",
  display: "block",
}));

const StyledPicture = styled("picture")({
  lineHeight: 0,
});

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

const InnerContainer = styled(MediumContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  height: "100%",
  padding: theme.spacing(2),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("screen_max_850")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("screen_max_850")]: {
    marginBottom: theme.spacing(1.5),
  },
}));

const Blurb = styled(Typography)(({ theme }) =>
  mergician(sideFadeStyles.left, {
    fontFamily: "Cinzel",
    fontWeight: 600,
    textAlign: "center",
    textShadow:
      "0px 3px 3px rgba(0, 0, 0, 0.75), 0px 6px 6px rgba(0, 0, 0, 0.5), 0px 9px 9px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up("tablet_min_900")]: {
      fontSize: "3rem",
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up("tablet_min_1200")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("mobile_max_599")]: {
      fontSize: "1.5rem",
      paddingTop: "0px",
    },
    [theme.breakpoints.down("screen_max_450")]: {
      fontSize: "1.35rem",
    },
  })
);

const SecondaryText = styled(Typography)(({ theme }) =>
  mergician(sideFadeStyles.right, {
    textAlign: "center",
    [theme.breakpoints.up("tablet_min_600")]: {
      fontSize: "1.5rem",
    },
  })
);

const LinkContainer = styled(Box)({
  opacity: "0",
  visibility: "hidden",
  animation: `${ANIMATION_TIME}s ease ${FADE_DELAY}s forwards ${fade}`,
});

export {
  StyledImg,
  StyledPicture,
  Container,
  InnerContainer,
  TextContainer,
  Blurb,
  SecondaryText,
  LinkContainer,
};

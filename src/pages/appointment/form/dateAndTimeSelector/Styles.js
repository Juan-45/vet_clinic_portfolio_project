import {
  Box,
  List as OriginalList,
  ListItem as OriginalListItem,
  ListItemButton as OriginalListItemButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { Button, TRANSITION_TIME } from "components/CommonStyles";
import { styled } from "@mui/material/styles";

const StyledPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "isAvailable",
})(({ theme, isAvailable }) => ({
  borderRadius: 0,
  ...(isAvailable && {
    backgroundColor: theme.palette.secondary.medium,
    color: theme.palette.common.white,
    "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus":
      {
        backgroundColor: theme.palette.secondary.main,
        "& .MuiTouchRipple-child": {
          color: theme.palette.common.white,
        },
      },
  }),
}));

const StyledStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  "& .MuiPickersCalendarHeader-root": {
    marginTop: theme.spacing(1),
    "& .MuiPickersArrowSwitcher-root": {
      "& .MuiPickersArrowSwitcher-button:not(.Mui-disabled)": {
        color: theme.palette.text.secondary,
      },
    },
  },
  "& .MuiDayPicker-weekDayLabel": {
    margin: "0px",
  },
  "& .MuiPickersFadeTransitionGroup-root": {
    "& .PrivatePickersSlideTransition-root": {
      minHeight: "210px",
    },
  },
}));

const PickerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  flexDirection: "column",
  "&.rightSpace": {
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("tablet_min_900")]: {
      marginRight: "0px",
    },
  },
  "&.bottomSpace": {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("screen_max_450")]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const TimeSelectorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "170px",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    width: "120px",
  },
  [theme.breakpoints.down("screen_max_450")]: {
    width: "100px",
  },
  "&.rightSpace": {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
}));

const Arrow = styled(ExpandMoreIcon)({
  "&.up": {
    transform: "rotate(180deg)",
  },
});

const DisplacementButton = styled(Button)(({ theme }) => ({
  height: "initial",
  width: "100%",
  borderRadius: "0px",
  boxShadow: "unset",
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  "&:hover": {
    boxShadow: "unset",
    background: theme.palette.common.white,
  },
  "&, &.Mui-disabled": {
    background: theme.palette.common.white,
  },
  "&.up": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&.down": {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const VerticalCarouselContainer = styled(Box)({
  height: "320px",
  overflowY: "hidden",
});

const List = styled(OriginalList, {
  shouldForwardProp: (prop) => prop !== "translateY",
})(({ theme, translateY }) => ({
  background: theme.palette.common.white,
  transition: `transform ${TRANSITION_TIME}s ease`,
  transform: `translateY(-${translateY}px)`,
}));

const ListItem = styled(OriginalListItem)({
  "&:hover": {
    background: "unset",
  },
});

const ListItemButton = styled(OriginalListItemButton)(({ theme }) => ({
  lineHeight: 1,
  background: theme.palette.secondary.medium,
  "&.Mui-selected, &.Mui-selected:hover, &:hover": {
    background: theme.palette.secondary.main,
  },
  "&.Mui-disabled, &.Mui-disabled:hover": {
    background: "unset",
  },
}));

const DateLabelContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  "&.selected": {
    background: theme.palette.ternary.medium,
  },
}));

const DateLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  "&&": {
    fontSize: "1.2rem",
    [theme.breakpoints.down("mobile_max_599")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("screen_max_450")]: {
      fontWeight: 400,
    },
  },
}));

const CaptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  width: "100%",
  marginTop: theme.spacing(2),
}));

const ReferenceBox = styled(Box)(({ theme }) => ({
  height: "36px",
  width: "36px",
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(1),
  background: theme.palette.secondary.medium,
}));

export {
  StyledPickersDay,
  StyledStaticDatePicker,
  PickerContainer,
  TimeSelectorContainer,
  Arrow,
  DisplacementButton,
  VerticalCarouselContainer,
  List,
  ListItem,
  ListItemButton,
  DateLabelContainer,
  DateLabel,
  CaptionContainer,
  ReferenceBox,
};

import { Box, Accordion, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const AccordionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .MuiAccordion-root:nth-of-type(2n+1).parent": {
    "& .MuiAccordionSummary-root.parent": {
      background: theme.palette.ternary.medium,
    },
  },
  "& .MuiAccordion-root:nth-of-type(2n).parent": {
    "& .MuiAccordionSummary-root.parent": {
      background: theme.palette.common.white,
    },
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: "0px",
  "& .MuiAccordionSummary-root": {
    padding: `0px ${theme.spacing(1.5)}`,
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper": {
      marginRight: theme.spacing(1.5),
    },
  },

  "&.child": {
    marginTop: theme.spacing(0.5),
    "&.Mui-expanded": {
      margin: `${theme.spacing(0.5)} 0px 0px 0px`,
    },
    "&:hover:not(.Mui-expanded)": {
      background: theme.palette.action.hover,
    },
  },

  "& .MuiAccordionDetails-root.child": {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2.5),
  },

  "& .MuiAccordionSummary-root.child": {
    minHeight: theme.spacing(5),
    "& .MuiAccordionSummary-expandIconWrapper": {
      transform: "rotate(-90deg)",
    },
    "& .MuiAccordionSummary-content": {
      margin: `${theme.spacing(1)} 0px`,
    },
    "&.Mui-expanded": {
      minHeight: theme.spacing(5),
      background: theme.palette.secondary.medium,
      "& .MuiAccordionSummary-expandIconWrapper": {
        transform: "rotate(0deg)",
      },
      "& .MuiAccordionSummary-content": {
        margin: `${theme.spacing(1)} 0px`,
      },
    },
  },

  "&.parent": {
    marginTop: theme.spacing(1.5),
    "&.Mui-expanded": {
      margin: `${theme.spacing(1.5)} 0px 0px 0px`,
      background: "transparent",
      boxShadow: "unset",
    },
  },

  "& .MuiAccordionDetails-root.parent": {
    padding: "0px",
  },

  "& .MuiAccordionSummary-root.parent": {
    "&.Mui-expanded": {
      boxShadow: theme.shadows[1],
      minHeight: theme.spacing(6),
      "& .MuiAccordionSummary-content": {
        margin: `${theme.spacing(1.5)} 0px`,
      },
    },
  },
}));

const Title = styled(Typography)({
  "&.parent": {
    fontWeight: 600,
  },
  "&.child": {
    fontWeight: 500,
  },
});

export { AccordionContainer, StyledAccordion, Title };

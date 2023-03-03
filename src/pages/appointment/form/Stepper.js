import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Stepper as StepperOriginal } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  MediumContainer,
  FlexRowCenter,
  HighlightBlue,
} from "components/CommonStyles";

const Container = styled(MediumContainer)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});

const StyledStep = styled(Step)(({ theme }) => ({
  "& .MuiSvgIcon-root.Mui-active, & .MuiSvgIcon-root.Mui-completed": {
    color: theme.palette.secondary.main,
  },
}));

const LabelContainer = styled(FlexRowCenter)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Stepper = ({ steps, activeStep }) => (
  <Container>
    <StepperOriginal activeStep={activeStep}>
      {steps.map((label) => (
        <StyledStep key={label}>
          <StepLabel />
        </StyledStep>
      ))}
    </StepperOriginal>
    <LabelContainer>
      <HighlightBlue>{steps[activeStep]}</HighlightBlue>
    </LabelContainer>
  </Container>
);

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default Stepper;

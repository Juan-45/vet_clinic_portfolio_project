import PropTypes from "prop-types";
import {
  TimeSelectorContainer,
  DateLabelContainer,
  DateLabel,
  DisplacementButton,
  Arrow,
  VerticalCarouselContainer,
  List,
} from "pages/appointment/form/dateAndTimeSelector/Styles";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

const TimeSelector = ({
  className,
  title,
  resetPosition,
  length,
  selected,
  children,
}) => {
  const match_max_599 = useMediaQuery((theme) =>
    theme.breakpoints.down("mobile_max_599")
  );
  const [step, setStep] = useState(0);

  const childrenLength = length;

  const CHILDREN_HEIGHT = 32;

  const AVAILABLE_HEIGHT = 320;

  const MAX_AMOUNT_MOVEMENTS =
    Math.ceil((childrenLength * CHILDREN_HEIGHT) / AVAILABLE_HEIGHT) - 1;

  const getTranslateYValue = (step) => step * AVAILABLE_HEIGHT;

  const upHandler = () => setStep(step - 1);

  const downHandler = () => setStep(step + 1);

  useEffect(() => {
    if (resetPosition) {
      setStep(0);
    }
  }, [resetPosition]);
  return (
    <TimeSelectorContainer className={className}>
      <DateLabelContainer className={selected ? "selected" : ""}>
        <DateLabel variant='h2'>
          {match_max_599 ? title.short : title.long}
        </DateLabel>
      </DateLabelContainer>
      <DisplacementButton
        disabled={step === 0}
        onClick={upHandler}
        disableRipple
        className='up'
      >
        <Arrow className='up' />
      </DisplacementButton>
      <VerticalCarouselContainer>
        <List translateY={getTranslateYValue(step)}>{children}</List>
      </VerticalCarouselContainer>
      <DisplacementButton
        disabled={step === MAX_AMOUNT_MOVEMENTS}
        onClick={downHandler}
        disableRipple
        className='down'
      >
        <Arrow />
      </DisplacementButton>
    </TimeSelectorContainer>
  );
};

TimeSelector.propTypes = {
  children: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
  title: PropTypes.shape({
    short: PropTypes.string,
    long: PropTypes.string,
  }).isRequired,
  resetPosition: PropTypes.bool,
  selected: PropTypes.bool,
  className: PropTypes.string,
};

TimeSelector.defaultProps = {
  title: {
    short: "short title",
    long: "long ___ title",
  },
  resetPosition: false,
};

export default TimeSelector;

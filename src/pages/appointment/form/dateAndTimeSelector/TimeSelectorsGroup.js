import PropTypes from "prop-types";
import {
  PickerContainer,
  TimeSelectorContainer,
  CaptionContainer,
  ReferenceBox,
} from "pages/appointment/form/dateAndTimeSelector/Styles";
import { Typography, Box } from "@mui/material";
import TimeSelector from "pages/appointment/form/dateAndTimeSelector/timeSelectorsGroup/TimeSelector";
import TimeSelectorContent from "pages/appointment/form/dateAndTimeSelector/timeSelectorsGroup/TimeSelectorContent";

const TimeSelectorsGroup = ({
  options,
  resetPosition,
  selectedTimeId,
  selectedDate,
  timeHandler,
}) => {
  const isSelected = (date) =>
    selectedDate.toLocaleDateString("es-ES").split("/").reverse().join("-") ===
    date.toLocaleDateString("es-ES").split("/").reverse().join("-");

  const children = options.map((item, index) => {
    if (Boolean(item)) {
      return (
        <TimeSelector
          className={index < 2 ? "rightSpace" : ""}
          resetPosition={resetPosition}
          length={item.times.length}
          title={item.title}
          selected={isSelected(item.dateObj)}
          key={item.dateStr}
        >
          <TimeSelectorContent
            contentData={item}
            selectedTimeId={selectedTimeId}
            timeHandler={timeHandler}
          />
        </TimeSelector>
      );
    } else
      return (
        <TimeSelectorContainer className={index < 2 ? "rightSpace" : ""} />
      );
  });

  return (
    <PickerContainer>
      <Box sx={{ display: "flex" }}>{children}</Box>
      <CaptionContainer>
        <ReferenceBox />
        <Typography variant='caption'>Horarios disponibles</Typography>
      </CaptionContainer>
    </PickerContainer>
  );
};

TimeSelectorsGroup.propTypes = {
  resetPosition: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      times: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string,
          isAvailable: PropTypes.bool,
        })
      ),
      title: PropTypes.shape({
        short: PropTypes.string,
        long: PropTypes.string,
      }),
    })
  ).isRequired,
  selectedTimeId: PropTypes.string,
  selectedDate: PropTypes.object,
  timeHandler: PropTypes.func,
};

export default TimeSelectorsGroup;

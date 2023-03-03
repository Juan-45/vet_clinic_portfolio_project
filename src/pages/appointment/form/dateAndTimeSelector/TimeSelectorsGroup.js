import PropTypes from "prop-types";
import {
  PickerContainer,
  TimeSelectorContainer,
} from "pages/appointment/form/dateAndTimeSelector/Styles";
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

  return <PickerContainer>{children}</PickerContainer>;
};

TimeSelectorsGroup.propTypes = {
  resetPosition: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      times: PropTypes.arrayOf(PropTypes.string),
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

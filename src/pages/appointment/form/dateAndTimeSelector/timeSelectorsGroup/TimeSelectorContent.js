import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
} from "pages/appointment/form/dateAndTimeSelector/Styles";

const TimeSelectorContent = ({ contentData, selectedTimeId, timeHandler }) => {
  return (
    <>
      {contentData.times.map((time) => {
        const currentId = `${contentData.dateStr}_${time}`;
        return (
          <ListItem key={time}>
            <ListItemButton
              id={currentId}
              selected={currentId === selectedTimeId}
              onClick={timeHandler}
            >
              {time}
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

TimeSelectorContent.propTypes = {
  contentData: PropTypes.shape({
    times: PropTypes.arrayOf(PropTypes.string),
    dateStr: PropTypes.string,
  }).isRequired,
  selectedTimeId: PropTypes.string.isRequired,
  timeHandler: PropTypes.func.isRequired,
};

export default React.memo(TimeSelectorContent);

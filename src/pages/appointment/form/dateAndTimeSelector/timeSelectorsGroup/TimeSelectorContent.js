import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
} from "pages/appointment/form/dateAndTimeSelector/Styles";

const TimeSelectorContent = ({ contentData, selectedTimeId, timeHandler }) => {
  return (
    <>
      {contentData.times.map((timeItem) => {
        const currentId = `${contentData.dateStr}_${timeItem.time}`;
        return (
          <ListItem key={timeItem.time}>
            <ListItemButton
              id={currentId}
              selected={currentId === selectedTimeId}
              onClick={timeHandler}
              disabled={timeItem.isAvailable}
            >
              {timeItem.time}
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

TimeSelectorContent.propTypes = {
  contentData: PropTypes.shape({
    times: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string,
        isAvailable: PropTypes.bool,
      })
    ),
    dateStr: PropTypes.string,
  }).isRequired,
  selectedTimeId: PropTypes.string.isRequired,
  timeHandler: PropTypes.func.isRequired,
};

export default React.memo(TimeSelectorContent);

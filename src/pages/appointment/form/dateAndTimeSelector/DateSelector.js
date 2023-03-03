import React from "react";
import PropTypes from "prop-types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { es } from "date-fns/locale";
import { TextField, Typography } from "@mui/material";
import {
  StyledStaticDatePicker,
  PickerContainer,
  StyledPickersDay,
  CaptionContainer,
  ReferenceBox,
} from "pages/appointment/form/dateAndTimeSelector/Styles";
import { AfterSquareContainer } from "components/CommonStyles";

const DateSelector = ({ availableDates, value, ...props }) => {
  const dateIsNotAvailable = (date) => {
    const result = date.toISOString().split("T")[0];
    const isInArray = availableDates.find(
      (availableDate) => availableDate === result
    );

    if (Boolean(isInArray)) {
      return false;
    } else return true;
  };

  const renderAvailablePickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const isAvailable = !dateIsNotAvailable(date);

    return (
      <StyledPickersDay
        {...pickersDayProps}
        disableMargin
        isAvailable={isAvailable}
      />
    );
  };

  return (
    <PickerContainer className='rightSpace bottomSpace column'>
      <AfterSquareContainer className='ternary responsive'>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <StyledStaticDatePicker
            renderDay={renderAvailablePickerDay}
            displayStaticWrapperAs='desktop'
            openTo='day'
            renderInput={(params) => <TextField {...params} />}
            shouldDisableDate={dateIsNotAvailable}
            views={["day"]}
            disablePast
            value={value}
            {...props}
          />
        </LocalizationProvider>
      </AfterSquareContainer>
      <CaptionContainer>
        <ReferenceBox />
        <Typography variant='caption'>Días disponibles</Typography>
      </CaptionContainer>
    </PickerContainer>
  );
};

DateSelector.propTypes = {
  availableDates: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.object,
};

export default React.memo(DateSelector);

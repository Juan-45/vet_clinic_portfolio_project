import ProminentTitle from "components/ProminentTitle";
import { Box } from "@mui/material";
import { LargeContainerFlex } from "components/CommonStyles";
import DateSelector from "pages/appointment/form/dateAndTimeSelector/DateSelector";
import TimeSelectorsGroup from "pages/appointment/form/dateAndTimeSelector/TimeSelectorsGroup";
import { useState, useEffect, useMemo, useCallback } from "react";

const DateAndTimeSelector = () => {
  const CURRENT_DATE = useMemo(() => new Date(), []);
  const MAX_DATE = useMemo(
    () => new Date(CURRENT_DATE.getFullYear(), CURRENT_DATE.getMonth() + 2, 0),
    [CURRENT_DATE]
  );

  const getRandomElements = (arr, initialIndex, step) => {
    const randomElements = [];

    for (let index = initialIndex; index < arr.length; ) {
      const randomAdd = Math.floor(Math.random() * step + 1);
      index = index + randomAdd;
      if (index < arr.length) {
        randomElements.push(arr[index]);
      }
    }
    return randomElements;
  };

  const getRandomDatesStrings = (currentDate) => {
    const randomDatesStrings = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dayNumber = currentDate.getDate();

    const getSchedule = () => {
      //8 a 12 y de 16 a 20
      //8 a 12
      const schedule = [];
      const minutes = ["00", "15", "30", "45"];
      for (let hour = 8; hour < 20; hour++) {
        const scheduleGap = hour >= 12 && hour < 16;
        if (!scheduleGap) {
          minutes.forEach((minute) => {
            if (hour < 10) {
              schedule.push(`0${hour}:${minute}`);
            } else {
              schedule.push(`${hour}:${minute}`);
            }
          });
        }
      }
      return schedule;
    };

    const getDaysAmount = (year, month) =>
      new Date(year, month + 1, 0).getDate();

    const getDays = (daysAmount) => {
      const days = [];
      for (let day = 1; day <= daysAmount; day++) {
        days.push(day);
      }
      return days;
    };

    const getDayName = (date) => {
      const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

      return capitalizeFirstLetter(
        date.toLocaleDateString("es-ES", { weekday: "long" })
      );
    };
    const getDateItem = (dateStr, dateObj, short, long) => {
      const dayName = getDayName(dateObj);

      return {
        dateStr,
        dateObj,
        times: getSchedule(),
        title: {
          short,
          long: `${dayName}, ${long}`,
        },
      };
    };

    for (let index = 0; index < 2; index++) {
      const randomDays = getRandomElements(
        getDays(getDaysAmount(year, month)),
        dayNumber,
        6
      );
      randomDays.forEach((day) => {
        const currentMonthIndex = month + index;
        const monthValue = currentMonthIndex + 1;
        const currentDateObj = new Date(year, currentMonthIndex, day);

        const excludeDays = ["Sábado", "Domingo"];

        if (!excludeDays.includes(getDayName(currentDateObj))) {
          if (day < 10 && monthValue < 10) {
            randomDatesStrings.push(
              getDateItem(
                `${year}-0${monthValue}-0${day}`,
                currentDateObj,
                `0${day}/0${monthValue}/${year}`,
                `0${day}/0${monthValue}`
              )
            );
          } else if (day < 10) {
            randomDatesStrings.push(
              getDateItem(
                `${year}-${monthValue}-0${day}`,
                currentDateObj,
                `0${day}/${monthValue}/${year}`,
                `0${day}/${monthValue}`
              )
            );
          } else if (monthValue < 10) {
            randomDatesStrings.push(
              getDateItem(
                `${year}-0${monthValue}-${day}`,
                currentDateObj,
                `${day}/0${monthValue}/${year}`,
                `${day}/0${monthValue}`
              )
            );
          } else {
            randomDatesStrings.push(
              getDateItem(
                `${year}-${monthValue}-${day}`,
                currentDateObj,
                `${day}/${monthValue}/${year}`,
                `${day}/${monthValue}`
              )
            );
          }
        }
      });
    }
    console.log("result", randomDatesStrings);
    return randomDatesStrings;
  };

  const DEFAULT_SELECTED_TIME = useMemo(
    () => ({
      time: "",
      id: "",
    }),
    []
  );

  const [availableDateAnTime] = useState(getRandomDatesStrings(CURRENT_DATE));
  const [date, setDate] = useState(CURRENT_DATE);
  const [selectedTime, setSelectedTime] = useState(DEFAULT_SELECTED_TIME);
  const [resetPosition, setResetPosition] = useState(false);
  const [timeSelectorGroupIndex, setTimeSelectorGroupIndex] = useState(0);

  const dateOnChange = useCallback(
    (value) => {
      setDate(value);
      setResetPosition(true);
      setSelectedTime(DEFAULT_SELECTED_TIME);
    },
    [DEFAULT_SELECTED_TIME]
  );

  const timeHandler = useCallback(
    (event) => {
      const currentId = event.target.id;
      const currentDateStr = currentId.split("_")[0];

      const currentDateObj = availableDateAnTime.find(
        (item) => item.dateStr === currentDateStr
      ).dateObj;

      setSelectedTime({
        time: event.target.innerText,
        id: currentId,
      });

      setDate(currentDateObj);
    },
    [availableDateAnTime]
  );

  const availableDates = useMemo(
    () => availableDateAnTime.map((item) => item.dateStr),
    [availableDateAnTime]
  );

  const options = useMemo(
    () => [
      availableDateAnTime[timeSelectorGroupIndex],
      availableDateAnTime[timeSelectorGroupIndex + 1],
      availableDateAnTime[timeSelectorGroupIndex + 2],
    ],
    [availableDateAnTime, timeSelectorGroupIndex]
  );

  useEffect(() => {
    if (resetPosition) {
      setResetPosition(false);
    }
  }, [resetPosition]);
  useEffect(() => {
    const dateIndex = availableDateAnTime.findIndex(
      (item) =>
        item.dateObj
          .toLocaleDateString("es-ES")
          .split("/")
          .reverse()
          .join("-") ===
        date.toLocaleDateString("es-ES").split("/").reverse().join("-")
    );
    if (dateIndex !== -1) {
      for (let subtrahend = 0; subtrahend <= 2; subtrahend++) {
        const subtraction = dateIndex - subtrahend;
        const isMultipleOfThree = subtraction % 3 === 0;
        if (isMultipleOfThree) {
          setTimeSelectorGroupIndex(subtraction);
          break;
        }
      }
    }
  }, [date, availableDateAnTime]);
  return (
    <LargeContainerFlex className='center bottomSpaceSmall'>
      <Box sx={{ width: "100%" }}>
        <ProminentTitle>Selecciona una fecha y hora</ProminentTitle>
      </Box>
      <DateSelector
        value={date}
        onChange={dateOnChange}
        maxDate={MAX_DATE}
        availableDates={availableDates}
      />
      <TimeSelectorsGroup
        options={options}
        resetPosition={resetPosition}
        selectedTimeId={selectedTime.id}
        selectedDate={date}
        timeHandler={timeHandler}
      />
    </LargeContainerFlex>
  );
};

export default DateAndTimeSelector;

import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

export default (props) => {
  const {value, setValue, use12Hours, readonly, placeholder, dateFormat, timeFormat, valueFormat, customProps, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const Picker = useKeyboard ? KeyboardDateTimePicker : DateTimePicker;
  const dateTimeFormat = dateFormat + " " + timeFormat;
  
  return (
    <FormControl>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Picker
          readOnly={readonly}
          disabled={readonly}
          ampm={!!use12Hours}
          placeholder={!readonly ? placeholder : ""}
          format={dateTimeFormat}
          value={value || null}
          onChange={handleChange}
          {...customProps}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};

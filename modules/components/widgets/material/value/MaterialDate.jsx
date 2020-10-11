import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

export default (props) => {
  const {value, setValue, readonly, customProps, dateFormat, valueFormat, placeholder, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const Picker = useKeyboard ? KeyboardDatePicker : DatePicker;

  return (
    <FormControl>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Picker
          readOnly={readonly}
          disabled={readonly}
          placeholder={!readonly ? placeholder : ""}
          format={dateFormat}
          value={value || null}
          onChange={handleChange}
          {...customProps}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};
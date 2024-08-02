import React from 'react';
import { Calendar } from 'primereact/calendar';

function DatePicker({ value, onChange }) {
  return (
    <Calendar
      value={value}
      onChange={onChange}
      dateFormat="dd/mm/yy"
      placeholder="Select a date"
      style={{ width: '100%' }}
    />
  );
}

export default DatePicker;

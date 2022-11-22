import React, { useState } from 'react';
import Calendar from 'short-react-calendar';
import Save from './Save';

export default function MyCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value}
      calendarType="US"
      oneWeekCalendar={true} />
      <Save/>
    </div>
  );
}
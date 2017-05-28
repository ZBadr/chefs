import React, {Component} from 'react';
import 'react-date-picker/index.css';
import { DateField, DatePicker } from 'react-date-picker'

class Cal extends Component {
  render(){
    return(
      <div>
        <h1>Delivery Time</h1>
        <DateField
          dateFormat="YYYY-MM-DD"
          forceValidDate={true}
          defaultValue={1495561319090}
          showClock={false}
        >
          <DatePicker
            navigation={true}
            locale="en"
            forceValidDate={true}
            highlightWeekends={true}
            highlightToday={true}
            weekNumbers={true}
            weekStartDay={0}
          />
        </DateField>
      </div>
    );
  }
}
export default Cal;
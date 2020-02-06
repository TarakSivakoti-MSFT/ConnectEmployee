import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
const DayPickerStrings: IDatePickerStrings = {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
  
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
  
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
  
    shortDays: ["S", "M", "T", "W", "T", "F", "S"],
  
    goToToday: "Go to today",
    prevMonthAriaLabel: "Go to previous month",
    nextMonthAriaLabel: "Go to next month",
    prevYearAriaLabel: "Go to previous year",
    nextYearAriaLabel: "Go to next year",
    closeButtonAriaLabel: "Close date picker",
  
    isRequiredErrorMessage: "Field is required.",
  
    invalidInputErrorMessage: "Invalid date format."
  };
export default class Ptorequest extends React.Component {


  public render () {
 
    return (
      <div className={ style.reqptocontainer}>
          <h5>PTO Request</h5>
          <div className="row">
                <div className="col-md-4">
          <DatePicker
                  className={style.datewidth}
                  isRequired={true}
                  firstDayOfWeek={DayOfWeek.Sunday}
                  strings={DayPickerStrings}
                  placeholder="Start Date"
                  ariaLabel="Select a date"
                />
                </div>
                 <div className="col-md-4">
                  <DatePicker
                    className={style.datewidth}
                    isRequired={true}
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    placeholder="End Date"
                    ariaLabel="Select a date"
                  />
                </div>
          </div>
          <div className="form-group">
              <label>Manager Email:</label>
              <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
          <label>Reason:</label>
          <textarea  className="form-control" id="pwd"/>
        </div>
        <button className="btn btn-primary">Submit</button>
     </div>
    );
  }
}
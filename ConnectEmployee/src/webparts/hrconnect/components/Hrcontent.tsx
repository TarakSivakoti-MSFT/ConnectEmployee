import * as React from "react";
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
import Tabledata from "../components/Tabledata";

import {
  DatePicker,
  DayOfWeek,
  IDatePickerStrings
} from "office-ui-fabric-react/lib/DatePicker";

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

export interface IDatePickerState {
  firstDayOfWeek?: DayOfWeek;
}

export default class Hrcontent extends React.Component<{}, IDatePickerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      firstDayOfWeek: DayOfWeek.Sunday
    };
  }
  public render(): JSX.Element {
    const { firstDayOfWeek } = this.state;
    return (
      <div className={style.hrcontent}>
        <div className="accordion" id="hrcontent">
          <div className="card">
            <div
              className="card-header"
              data-toggle="collapse"
              data-target="#pay"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h2 className={cx("mb-0", style.heading, style.pay)}>
                <button className="btn btn-link" type="button">
                  Pay
                </button>
              </h2>
            </div>

            <div id="pay" className="collapse" data-parent="#hrcontent">
              <div className={style.dis}>
                <div className={style.date1}>
                  <DatePicker
                    className={style.datewidth}
                    isRequired={true}
                    firstDayOfWeek={firstDayOfWeek}
                    strings={DayPickerStrings}
                    placeholder="Start Date"
                    ariaLabel="Select a date"
                  />
                </div>
                <div className={style.date}>
                  <DatePicker
                    className={style.datewidth}
                    isRequired={true}
                    firstDayOfWeek={firstDayOfWeek}
                    strings={DayPickerStrings}
                    placeholder="End Date"
                    ariaLabel="Select a date"
                  />
                </div>
              </div>
              <div>
                <table className="table table-hover">
                  {/* <thead>
                    <tr>
                      <th scope="col">S No</th>
                      <th scope="col">Pay Stubs</th>
                      <th scope="col">View</th>
                      <th scope="col">Download</th>
                    </tr>
                  </thead> */}
                  <Tabledata />
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              data-toggle="collapse"
              data-target="#pto"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h2 className={cx("mb-0", style.heading, style.pto)}>
                <button className="btn btn-link collapsed" type="button">
                  PTO
                </button>
              </h2>
            </div>
            <div id="pto" className="collapse" data-parent="#hrcontent">
              <div className={cx("card-deck", style.deck)}>
                <div className={cx("card", style.card)}>
                  <div className="card-body">
                    <h5 className="card-title">PTO Balance</h5>
                    <h1 className={style.ptoalign}>7</h1>
                  </div>
                </div>
                <div className={cx("card", style.card)}>
                  <div className="card-body">
                    <h5 className={cx("card-title", style.reqpto)}>
                      Request PTO
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              data-toggle="collapse"
              data-target="#benefits"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h2 className={cx("mb-0", style.heading, style.benefits)}>
                <button className="btn btn-link collapsed" type="button">
                  Benefits
                </button>
              </h2>
            </div>
            <div
              id="benefits"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#hrcontent"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              data-toggle="collapse"
              data-target="#training"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h2 className={cx("mb-0", style.heading, style.dev)}>
                <button className="btn btn-link collapsed" type="button">
                  Training/Dev
                </button>
              </h2>
            </div>
            <div
              id="training"
              className="collapse"
              aria-labelledby="collapseFour"
              data-parent="#hrcontent"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

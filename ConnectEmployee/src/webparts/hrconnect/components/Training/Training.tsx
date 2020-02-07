import * as React from "react";
import styles from "./Training.module.scss";
import style from "../../scss/hrcontent.module.scss";
import cx from "classnames";
import {
  DatePicker,
  DayOfWeek,
  IDatePickerStrings
} from "office-ui-fabric-react/lib/DatePicker";
import Modal from "office-ui-fabric-react/lib/Modal";
import Register from "../Register";
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
export default class Training extends React.Component {
  public state: {
    showModal: false;
    classname: "";
  };
  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
      classname: ""
    };
  }
  public render() {
    // let cssURL = "./Training.css";
    // SPComponentLoader.loadCss(cssURL);
    return (
      <div className="accordion" id="trainingdata">
        <div className="card">
          <div
            className="card-header"
            data-toggle="collapse"
            data-target="#scheduleclasses"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h2 className={cx("mb-0", style.heading)}>
              <button className="btn" type="button">
                Schedule
              </button>
            </h2>
          </div>

          <div
            id="scheduleclasses"
            className="collapse show"
            data-parent="#trainingdata"
          >
            <div className={styles.training}>
              {/* <div className="row">
                <div className="col-md-4 m-3">
                  <DatePicker
                    className={style.datewidth}
                    isRequired={true}
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    placeholder="Schedule Date"
                    ariaLabel="Select a date"
                  />
                </div>
              </div>
              <br></br> */}
              <h2 className={cx("mb-0", style.heading)}>
                <button className="btn" type="button">
                  Mandatory Trainings
                </button>
              </h2>
              <div className={styles.schedulewarp}>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-3 col-sm-3">
                      <span className={styles.scheduletag}>10 Jan 2020</span>
                      <br></br>
                      10:00 AM
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong>Pediatric CPR, AED, and FIRST AID</strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong className="text-success">Completed</strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <button
                        className={cx(
                          "btn btn-primary float-right",
                          style.disablecursor
                        )}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-3 col-sm-3">
                      <span className={styles.scheduletag}>10 Feb 2020</span>
                      <br></br>
                      11:00 AM
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong>HEARTSAVER FIRST AID</strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong className="text-primary">In Progress</strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <button
                        className={cx(
                          "btn btn-primary float-right",
                          style.disablecursor
                        )}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-3 col-sm-3">
                      <span className={styles.scheduletag}>12 Feb 2020</span>
                      <br></br>
                      10:00 AM
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong>
                        Clinical Bioinformatics: Unlocking Genomics in
                        Healthcare
                      </strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <strong className="text-danger">Scheduled</strong>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <button
                        className="btn btn-primary float-right"
                        onClick={() =>
                          this._showModal(
                            "Clinical Bioinformatics: Unlocking Genomics in Healthcare"
                          )
                        }
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                titleAriaId="Register Form"
                isOpen={this.state.showModal}
                onDismiss={this._closeModal}
                isBlocking={false}
              >
                <h3
                  onClick={this._closeModal}
                  className={cx("float-right pr-2", style.popupclose)}
                  aria-hidden="true"
                >
                  ×
                </h3>
                <Register classname={this.state.classname} />
              </Modal>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header"
            data-toggle="collapse"
            data-target="#onlineclasses"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h2 className={cx("mb-0", style.heading)}>
              <button className="btn" type="button">
                Optional Trainings
              </button>
            </h2>
          </div>

          <div
            id="onlineclasses"
            className="collapse show"
            data-parent="#trainingdata"
          >
            <div className={styles.training}>
              <div className={styles.schedulewarp}>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>20 Feb 2020 </span>
                      <br></br> 11:00 AM
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>Care Home Nursing: Changing Perceptions</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button className="btn btn-primary float-right">
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>24 Feb 2020 </span>
                      <br></br> 1:00 PM
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>First Aid for Adults</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                        type="button"
                        className="btn btn-primary  float-right"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>3 March 2020</span>{" "}
                      <br></br> 10:00 AM
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>Service Improvement in Healthcare</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  private _showModal(className: string) {
    this.setState({ showModal: true, classname: className });
  }

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  };
}

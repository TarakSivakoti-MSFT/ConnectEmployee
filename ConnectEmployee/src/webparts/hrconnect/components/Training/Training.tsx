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
              <div className="row">
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
              <br></br>
              <div className={styles.schedulewarp}>
                <h5 className={cx("card-title", styles.dayone)}>Febrauary 7 (Friday) 2020</h5>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>10:00 AM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>React</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                         className="btn btn-primary float-right"
                        onClick={() => this._showModal("React")}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>12:00 PM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>.Net</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                         className="btn btn-primary float-right"
                        onClick={() => this._showModal(".Net")}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                    <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>4:00 PM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>Angular</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                         className="btn btn-primary float-right"
                        onClick={() => this._showModal("Angular")}
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
                <h3 onClick={this._closeModal} className={cx("float-right pr-2",style.popupclose)} aria-hidden="true">×</h3>
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
                Online Trainings
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
                      <span className={styles.scheduletag}>11:00 AM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>React Advanced</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button
                         className="btn btn-primary float-right"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                  <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>1:00 PM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>.Net Full Stack</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <button type="button" className="btn btn-primary  float-right">
                    View
                  </button>
                    </div>
                  </div>
                </div>
                <div className={styles.schedulecard}>
                  <div className={cx("row", styles.insidebox)}>
                  <div className="col-md-4 col-sm-4">
                      <span className={styles.scheduletag}>3:00 PM</span>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <strong>Angular Deep Concepts</strong>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <button type="button" className="btn btn-primary float-right">
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
  }
}

import * as React from "react";
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
import Tabledata from "../components/Tabledata";
import Ptorequest from "../components/Ptorequest";
import Training from "../components/Training/Training";
import Benefits from "./benefits";
import {
  DatePicker,
  DayOfWeek,
  IDatePickerStrings
} from "office-ui-fabric-react/lib/DatePicker";
import Documentviewer from "./documentviewer";
import { Modal, IDragOptions } from "office-ui-fabric-react/lib/Modal";
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
  showModal: boolean;
}

export default class Hrcontent extends React.Component<{}, IDatePickerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
      firstDayOfWeek: DayOfWeek.Sunday
    };
  }
  public render(): JSX.Element {
    const { firstDayOfWeek } = this.state;
    return (
      <div className={style.hrcontent}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fcontosohealthsystem.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!D3HUnfnOHESMgckvPSxfXTOvaZynM6RLgOVZJ6qKmzCntPKLjvLvTrmUaKsPs1XF%2Fitems%2F015JDSC3TDZ4W3KGI5YNAYOEYABEYG7UXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvY29udG9zb2hlYWx0aHN5c3RlbS5zaGFyZXBvaW50LmNvbUBkMjI2ZDZhOC1lZjM4LTQ3MTQtYTM3MC1lODQyMjNmYWY1M2IiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTgxMTUwMTkxIiwiZXhwIjoiMTU4MTE3MTc5MSIsImVuZHBvaW50dXJsIjoibHVCc0JaL0Y0VktKZ3JsdHNSemJaUitiWTZUalVRbzgwVGJKVHgrRThWYz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTWpFMk1UTXpPV1l0WlRBMk1DMHdNREF3TFRRMU9UQXRaalF3WVROa056WmxZV0UyIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik9XUmtORGN4TUdZdFkyVm1PUzAwTkRGakxUaGpPREV0WXpreVpqTmtNbU0xWmpWayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxzcmluaUBjb250b3NvaGVhbHRoc3lzdGVtLm9ubWljcm9zb2Z0LmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwMzNjNWE0YzlAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.a3gzY0E0dVVhN2pCQWU3Y29KZzhHcjZoakdDNVZ2YWhrUmdaY3g0YmEwcz0&encodeFailures=1&srcWidth=&srcHeight=&width=1000&height=220&action=Access"
                className="d-block w-50"
                alt="UC health logo"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fcontosohealthsystem.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!D3HUnfnOHESMgckvPSxfXTOvaZynM6RLgOVZJ6qKmzCntPKLjvLvTrmUaKsPs1XF%2Fitems%2F015JDSC3TDZ4W3KGI5YNAYOEYABEYG7UXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvY29udG9zb2hlYWx0aHN5c3RlbS5zaGFyZXBvaW50LmNvbUBkMjI2ZDZhOC1lZjM4LTQ3MTQtYTM3MC1lODQyMjNmYWY1M2IiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTgxMTUwMTkxIiwiZXhwIjoiMTU4MTE3MTc5MSIsImVuZHBvaW50dXJsIjoibHVCc0JaL0Y0VktKZ3JsdHNSemJaUitiWTZUalVRbzgwVGJKVHgrRThWYz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTWpFMk1UTXpPV1l0WlRBMk1DMHdNREF3TFRRMU9UQXRaalF3WVROa056WmxZV0UyIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik9XUmtORGN4TUdZdFkyVm1PUzAwTkRGakxUaGpPREV0WXpreVpqTmtNbU0xWmpWayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxzcmluaUBjb250b3NvaGVhbHRoc3lzdGVtLm9ubWljcm9zb2Z0LmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwMzNjNWE0YzlAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.a3gzY0E0dVVhN2pCQWU3Y29KZzhHcjZoakdDNVZ2YWhrUmdaY3g0YmEwcz0&encodeFailures=1&srcWidth=&srcHeight=&width=1000&height=220&action=Access"
                className="d-block w-50"
                alt="UC health logo"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fcontosohealthsystem.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!D3HUnfnOHESMgckvPSxfXTOvaZynM6RLgOVZJ6qKmzCntPKLjvLvTrmUaKsPs1XF%2Fitems%2F015JDSC3TDZ4W3KGI5YNAYOEYABEYG7UXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvY29udG9zb2hlYWx0aHN5c3RlbS5zaGFyZXBvaW50LmNvbUBkMjI2ZDZhOC1lZjM4LTQ3MTQtYTM3MC1lODQyMjNmYWY1M2IiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTgxMTUwMTkxIiwiZXhwIjoiMTU4MTE3MTc5MSIsImVuZHBvaW50dXJsIjoibHVCc0JaL0Y0VktKZ3JsdHNSemJaUitiWTZUalVRbzgwVGJKVHgrRThWYz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyNiIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiTWpFMk1UTXpPV1l0WlRBMk1DMHdNREF3TFRRMU9UQXRaalF3WVROa056WmxZV0UyIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik9XUmtORGN4TUdZdFkyVm1PUzAwTkRGakxUaGpPREV0WXpreVpqTmtNbU0xWmpWayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxzcmluaUBjb250b3NvaGVhbHRoc3lzdGVtLm9ubWljcm9zb2Z0LmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwMzNjNWE0YzlAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.a3gzY0E0dVVhN2pCQWU3Y29KZzhHcjZoakdDNVZ2YWhrUmdaY3g0YmEwcz0&encodeFailures=1&srcWidth=&srcHeight=&width=1000&height=220&action=Access"
                className="d-block w-50"
                alt="UC health logo"
              />
            </div>
          </div>
        </div>

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
                    <div className="row">
                      <div className={cx("col-md-4", style.ptoblock)}>
                        <span className={style.ptoheading}>
                          Prior PTO Balance
                        </span>
                        <div className="text-center">3</div>
                      </div>
                      <div className={cx("col-md-4", style.ptoblock)}>
                        <span className={style.ptoheading}>
                          Current Year Balance
                        </span>
                        <div className="text-center">7</div>
                      </div>
                      <div className={cx("col-md-4", style.ptoblock)}>
                        <span className={style.ptoheading}>Accurate Rate</span>
                        <div className="text-center">2</div>
                      </div>
                    </div>

                    {/* <table className={cx("table  table-responsive",style.tableborder)}>
                      <tr>
                        <td className={style.tabletd}>
                        <span className={style.ptoheading}>Prior PTO Balance</span>
                        </td>
                        <td className={style.tabletd}>
                        <span className={style.ptoheading}>Current Year Balance</span>
                        </td>
                        <td className={style.tabletd}>
                        <span className={style.ptoheading}>Accurate Rate</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={style.tabletd}>
                        <span className="text-center">3</span>
                        </td>
                        <td className={style.tabletd}>
                        <span className="text-center">7</span>
                        </td>
                        <td className={style.tabletd}>
                        <span className="text-center">2</span>
                        </td>
                      </tr>
                    </table> */}
                  </div>
                </div>
                <div
                  onClick={this._showModal}
                  className={cx("card", style.card)}
                >
                  <div className="card-body">
                    <h5 className={cx("card-title", style.reqpto)}>
                      Request PTO
                    </h5>
                    <Modal
                      titleAriaId="Request Form"
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
                      <Ptorequest />
                    </Modal>
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
                <Benefits />
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
                <Training />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _showModal = (): void => {
    this.setState({ showModal: true });
  }

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  }
}

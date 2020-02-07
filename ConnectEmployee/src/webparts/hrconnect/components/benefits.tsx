import * as React from "react";
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
import Modal from "office-ui-fabric-react/lib/Modal";
import Enrollment from "./enrollment";
export default class Benefits extends React.Component {
  public state: {
    showModal: false;
    benefit: "";
  };
  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
      benefit: ""
    };
  }

  public render() {
    return (
      <div>
        <div className={cx("card-deck", style.deck)}>
          <div className={cx("card", style.card)}>
            <div className="card-body">
              <h5 className="card-title">Current Benefits</h5>
              <ul className="list-group">
                <a
                  className={style.benefitlink}
                  href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EQMAZ0gt_DVLrilaggy1khkBqJmHbLO4bWnb0ey3mf7WVQ?e=RPDpwk"
                  target="_blank"
                >
                  <li className="list-group-item">
                    Medical Insurance{" "}
                    <span className="float-right">
                      <i className="fa fa-check text-primary"></i>
                    </span>
                  </li>
                </a>
                <a
                  className={style.benefitlink}
                  href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EdlvadQVO8hPspA_8cyu3boBNKwZBQupSs8Cts-X69eJ8g?e=q6KZj8"
                  target="_blank"
                >
                  <li className="list-group-item">
                    Retirement Benefits{" "}
                    <span className="float-right">
                      <i className="fa fa-check text-primary"></i>
                    </span>
                  </li>
                </a>
                <a
                  className={style.benefitlink}
                  href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EY6_avLKF1VIseWHcjHLzO4BD_BayVeSrr7NKVELR26SFA?e=HX7zyD"
                  target="_blank"
                >
                  <li className="list-group-item">
                    Family Leave{" "}
                    <span className="float-right">
                      <i className="fa fa-check text-primary"></i>
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className={cx("card", style.card)}>
            <div className="card-body">
              <h5 className="card-title">Other Benefits</h5>
              <ul className="list-group">
                <li
                  className="list-group-item"
                  onClick={() => this._showModal("Life Insurance")}
                >
                  Life Insurance{" "}
                  <span className="float-right">
                    <i className="fa fa-close text-danger"></i>
                  </span>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this._showModal(" Disability Insurance ")}
                >
                  Disability Insurance{" "}
                  <span className="float-right">
                    <i className="fa fa-close text-danger"></i>
                  </span>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this._showModal("Vacation")}
                >
                  Vacation{" "}
                  <span className="float-right">
                    <i className="fa fa-close text-danger"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          titleAriaId="Enrollment Form"
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
          <Enrollment benefit={this.state.benefit} />
        </Modal>
      </div>
    );
  }

  private _showModal(benefit: string) {
    this.setState({ showModal: true, benefit: benefit });
  }

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  };
}

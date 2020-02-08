import * as React from "react";
import styles from "./Workorderform.module.scss";
import { IWorkorderformProps } from "./IWorkorderformProps";
import "jquery";
require("bootstrap");
import Dates from "../components/Dates";
import cx from "classnames";

export default class Workorderform extends React.Component<
  IWorkorderformProps,
  {}
> {
  public render(): React.ReactElement<IWorkorderformProps> {
    return (
      <div className={styles.workorderform}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="incident"
              data-toggle="pill"
              href="#Incident"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Incident Report Form
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="equipment"
              data-toggle="pill"
              href="#Equipment"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Equipment Re-order Form
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="Incident"
            role="tabpanel"
            aria-labelledby="incident"
          >
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Name of Incident</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Manager email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Date of request</label>
                <Dates />
              </div>
              <div className="form-group">
                <label>Details of Incident</label>
                <input type="text" className="form-control" required />
              </div>
              <div className={cx(styles.align)}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="Equipment"
            role="tabpanel"
            aria-labelledby="equipment"
          >
            <form>
              <div className="form-group">
                <label>Employee Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className={cx("form-group", styles.br)}>
                <label>Date of request</label>
                <Dates />
              </div>
              <div className="form-group">
                <label>Equipment Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input type="text" className="form-control" required />
              </div>
              <div className={cx(styles.align)}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

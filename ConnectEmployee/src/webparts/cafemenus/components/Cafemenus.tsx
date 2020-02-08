import * as React from "react";
import styles from "./Cafemenus.module.scss";
import { ICafemenusProps } from "./ICafemenusProps";

import cx from "classnames";
export default class Cafemenus extends React.Component<ICafemenusProps, {}> {
  public render(): React.ReactElement<ICafemenusProps> {
    return (
      <div className={styles.cafemenus}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Garden View Menu​​​​​​​
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Courtyard Menu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <object
              width="100%"
              height="600"
              data="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ees0osQQlz5IphiP4cMqa80BPqDh1LhwSB8D_lKM6GhAiA?e=f8c7OC"
            ></object>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <object
              width="100%"
              height="600"
              data="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ec5xFv6IMCRNqFrqU7TD_24Bqrj22922wcOkg1JuGNj4GA?e=bkMuxw"
            ></object>
          </div>
        </div>
      </div>
    );
  }
}

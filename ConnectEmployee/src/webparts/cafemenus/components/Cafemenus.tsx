import * as React from "react";
import styles from "./Cafemenus.module.scss";
import { ICafemenusProps } from "./ICafemenusProps";
import * as $ from "jquery";
import cx from "classnames";
export default class Cafemenus extends React.Component<ICafemenusProps, {}> {
  public render(): React.ReactElement<ICafemenusProps> {
    return (
      <div className={styles.cafemenus}>
        <img
          src="https://m365x520260.sharepoint.com/sites/ConnectEmployee/Shared%20Documents/sys_pos_clr_rgb.png"
          className={styles.logo}
        />
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className={cx("nav-item", styles.navwd)} onClick={() =>this._changeActive( "exterior")}>
            <a
              className={cx("nav-link", "active", styles.brrad,styles.active)}
              id="exterior"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              {/* srini enable Garden View Menu​​​​​​​ */}
              Exterior Menu
            </a>
          </li>
          <li className={cx("nav-item", styles.navwd)} onClick={() =>this._changeActive( "interior")}>
            <a
              className={cx("nav-link", styles.brrad)}
              id="interior"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              {/* srini enable Courtyard Menu */}
              Interior Menu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="exterior"
          >
            {/* srini enable */}
            {/* <object
              width="100%"
              height="600"
              data="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ees0osQQlz5IphiP4cMqa80BPqDh1LhwSB8D_lKM6GhAiA?e=f8c7OC"
            ></object> */}
            <object
              width="100%"
              height="600"
              data="https://m365x520260.sharepoint.com/:i:/s/ConnectEmployee/EVu-VaEHwHpIswSGJaMPRA4Bbwm2D3Rvq8UWFOHNCb3CPw?e=5P9AfR"
            ></object>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="interior"
          >
            {/* srini enable */}
            {/* <object
              width="100%"
              height="600"
              data="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ec5xFv6IMCRNqFrqU7TD_24Bqrj22922wcOkg1JuGNj4GA?e=bkMuxw"
            ></object> */}
            <object
              width="100%"
              height="600"
              data="https://m365x520260.sharepoint.com/:i:/s/ConnectEmployee/ETxXCGisUj5NnfRLMTuHaUsBgqTGtGfdX1lVlhG5h-mpVg?e=euRBQk"
            ></object>
          </div>
        </div>
      </div>
    );
  }

  public _changeActive(currentitem: string){
    $('.nav-link').removeClass(styles.active);
    $("#"+currentitem).addClass(styles.active);
  }
}

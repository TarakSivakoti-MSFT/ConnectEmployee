import * as React from "react";
import styles from "./Hrconnect.module.scss";
import { IHrconnectProps } from "./IHrconnectProps";
import Hrcontent from "./Hrcontent";

export default class Hrconnect extends React.Component<IHrconnectProps, {}> {
  public render(): React.ReactElement<IHrconnectProps> {
    return (
      <div className={styles.hrconnect}>
        <div className={styles.row}>
          <div className="col-12">
            <Hrcontent />
          </div>
        </div>
      </div>
    );
  }
}

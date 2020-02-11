import * as React from 'react';
import styles from './Staffnews.module.scss';
import { IStaffnewsProps } from './IStaffnewsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Staffnews extends React.Component<IStaffnewsProps, {}> {
  public render(): React.ReactElement<IStaffnewsProps> {
    return (
      <div className={styles.staffnews}>
        <img
          // enable for admin
          // src="https://m365x520260.sharepoint.com/sites/ConnectEmployee/Shared%20Documents/sys_pos_clr_rgb.png"
          src="https://contosohealthsystem.sharepoint.com/sites/ConnectEmployee/Shared%20Documents/Intelligent%20Health%202.png"
          className={styles.logo}
        />
      </div>
    );
  }
}

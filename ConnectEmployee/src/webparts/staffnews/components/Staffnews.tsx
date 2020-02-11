import * as React from 'react';
import styles from './Staffnews.module.scss';
import { IStaffnewsProps } from './IStaffnewsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Staffnews extends React.Component<IStaffnewsProps, {}> {
  public render(): React.ReactElement<IStaffnewsProps> {
    return (
      <div className={ styles.staffnews }>
         <img
          src="https://m365x520260.sharepoint.com/sites/ConnectEmployee/Shared%20Documents/sys_pos_clr_rgb.png"
          className={styles.logo}
        />
      </div>
    );
  }
}

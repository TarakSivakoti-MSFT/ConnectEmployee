import * as React from "react";
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
export default class Tabledata extends React.Component {
  public isView: boolean = false;
  public render() {
    return (
      <tbody className={style.hrcontent}>
        <tr className={style.paystubrow}>
          <th scope="row">1</th>
          <td>15 Dec 2019</td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EdvBCdtmnclCoAZFDvsCCWoBlLgUUJqaUrUf9nOiCnJEgw?e=4lXM6a"
              target="_blank"
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                View
              </button>
            </a>
          </td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EdvBCdtmnclCoAZFDvsCCWoBlLgUUJqaUrUf9nOiCnJEgw?e=4lXM6a"
              download
            >
              <button type="button" className={cx("btn", style.btnclr)} >
                Download
              </button>
            </a>
          </td>
        </tr>
        <tr className={style.paystubrow}>
          <th scope="row">2</th>
          <td>31 Dec 2019</td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ea4PKoi8ka1IhnSgJ42xfooBP7EXLJKWbmNQoBNrte3-NA?e=0oQBAR"
              target="_blank"
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                View
              </button>
            </a>
          </td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ea4PKoi8ka1IhnSgJ42xfooBP7EXLJKWbmNQoBNrte3-NA?e=0oQBAR"
              download
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                Download
              </button>
            </a>
          </td>
        </tr>
        <tr className={style.paystubrow}>
          <th scope="row">3</th>
          <td>15 Jan 2020</td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EQDszK3F2BlCvgylNDyekksB0PV-aQ4sX0RwlZbavDyoNg?e=R1OIaw"
              target="_blank"
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                View
              </button>
            </a>
          </td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EQDszK3F2BlCvgylNDyekksB0PV-aQ4sX0RwlZbavDyoNg?e=R1OIaw"
              download
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                Download
              </button>
            </a>
          </td>
        </tr>
        <tr className={style.paystubrow}>
          <th scope="row">4</th>
          <td>31 Jan 2020</td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EXlREcW9UL1Co7sk8ijZ2EIBY6w0sVXH-eXCLG7IwD2lRA?e=huHnFu"
              target="_blank"
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                View
              </button>
            </a>
          </td>
          <td>
            <a
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EXlREcW9UL1Co7sk8ijZ2EIBY6w0sVXH-eXCLG7IwD2lRA?e=huHnFu"
              download
            >
              <button type="button" className={cx("btn", style.btnclr)}>
                Download
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

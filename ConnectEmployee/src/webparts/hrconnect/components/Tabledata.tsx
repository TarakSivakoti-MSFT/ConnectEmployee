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
              // enable for srini
              href="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/EdvBCdtmnclCoAZFDvsCCWoBlLgUUJqaUrUf9nOiCnJEgw?e=4lXM6a"

              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/EU95RZ77Vs5HpUXekrmKsrYBGpbvrtf718LGU0G2y0qgnA?e=GCtvx6"
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

              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/EU95RZ77Vs5HpUXekrmKsrYBGpbvrtf718LGU0G2y0qgnA?e=GCtvx6"
              download
            >
              <button type="button" className={cx("btn", style.btnclr)}>
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/EV43bFRSqxVGqGpDSJ54y_wBNnBefB8xNUkwMjEnotJctg?e=8KBM2e"
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/EV43bFRSqxVGqGpDSJ54y_wBNnBefB8xNUkwMjEnotJctg?e=8KBM2e"
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/Ea86zZQvDs1JmyS4k5WhsZcBK78eELwF56RXeZsb-Ti_xw?e=LvhzGA"
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/Ea86zZQvDs1JmyS4k5WhsZcBK78eELwF56RXeZsb-Ti_xw?e=LvhzGA"
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/Ea86zZQvDs1JmyS4k5WhsZcBK78eELwF56RXeZsb-Ti_xw?e=LvhzGA"
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
              // href="https://m365x520260.sharepoint.com/:b:/s/ConnectEmployee/Ea86zZQvDs1JmyS4k5WhsZcBK78eELwF56RXeZsb-Ti_xw?e=LvhzGA"
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

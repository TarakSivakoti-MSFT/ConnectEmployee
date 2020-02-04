import * as React from "react";
import style from "../scss/hrcontent.module.scss";

export default class Tabledata extends React.Component {
  public render() {
    return (
      <tbody className={style.hrcontent}>
        <tr>
          <th scope="row">1</th>
          <td>15 Dec 2019</td>
          <td>
            <button type="button" className="btn btn-primary">
              View
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-success">
              Download
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>31 Dec 2019</td>
          <td>
            <button type="button" className="btn btn-primary">
              View
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-success">
              Download
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>15 Jan 2020</td>
          <td>
            <button type="button" className="btn btn-primary">
              View
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-success">
              Download
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>31 Jan 2020</td>
          <td>
            <button type="button" className="btn btn-primary">
              View
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-success">
              Download
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

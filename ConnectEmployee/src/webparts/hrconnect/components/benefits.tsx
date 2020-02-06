import * as React from 'react';
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";
export default class Benefits extends React.Component {


  public render () {

    return (
        <div className={cx("card-deck", style.deck)}>
        <div className={cx("card", style.card)}>
          <div className="card-body">
            <h5 className="card-title text-primary">Current Benefits</h5>
            <ul className="list-group">
                <li  className="list-group-item">
                <span><i className="fa fa-check text-primary"></i></span> Medical Insurance
                </li>
                <li  className="list-group-item">
                <span><i className="fa fa-check text-primary"></i></span> Retirement Benefits
                </li>
                <li  className="list-group-item">
                <span><i className="fa fa-check text-primary"></i></span>Family Leave
                </li>
            </ul>
          </div>
        </div>
        <div className={cx("card", style.card)}>
          <div className="card-body">
            <h5 className="card-title text-primary">
              Other Benefits
            </h5>
            <ul className="list-group">
                <li className="list-group-item">
                <span><i className="fa fa-close text-danger"></i></span> Life Insurance
                </li>
                <li className="list-group-item">
                <span><i className="fa fa-close text-danger"></i></span>Disability Insurance
                </li>
                <li className="list-group-item">
                <span><i className="fa fa-close text-danger"></i></span>Vacation
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



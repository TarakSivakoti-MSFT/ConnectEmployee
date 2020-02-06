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
                Medical Insurance <span className="float-right"><i className="fa fa-check text-primary"></i></span> 
                </li>
                <li  className="list-group-item">
              Retirement Benefits <span className="float-right"><i className="fa fa-check text-primary"></i></span> 
                </li>
                <li  className="list-group-item">
                Family Leave <span className="float-right"><i className="fa fa-check text-primary"></i></span> 
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
                Life Insurance <span className="float-right"><i className="fa fa-close text-danger"></i></span> 
                </li>
                <li className="list-group-item">
                Disability Insurance <span className="float-right"><i className="fa fa-close text-danger"></i></span> 
                </li>
                <li className="list-group-item">
                Vacation <span className="float-right"><i className="fa fa-close text-danger"></i></span> 
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



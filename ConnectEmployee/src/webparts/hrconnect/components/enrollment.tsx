import * as React from 'react';
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";

export interface IRegisterprops {
    benefit:string;
}

export default class Enrollment extends React.Component<IRegisterprops> {
  
  constructor(props: IRegisterprops) {
    super(props);

    this.state = {
        benefit:""
    };
  }
  public render () {
 
    return (
      <div  className={style.reqptocontainer}>
        <h5>Enroll for Benefit</h5>
          <div className="form-group">
              <label>Email address:</label>
              <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
          <label>Benefit:</label>
          <input type="text" className="form-control" id="class" value={this.props.benefit} disabled/>
        </div>
        <button className="btn btn-primary">Submit</button>
     </div>
    );
  }
}
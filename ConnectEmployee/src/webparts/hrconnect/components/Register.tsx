import * as React from 'react';
import style from "../scss/hrcontent.module.scss";
import cx from "classnames";

export interface IRegisterprops {
  classname:string
}

export default class Register extends React.Component<IRegisterprops> {
  
  constructor(props: IRegisterprops) {
    super(props);

    this.state = {
      classname:""
    };
  }
  public render () {
 
    return (
      <div  className={cx("container", style.reqptocontainer)}>
        <h5>Register for Class</h5>
          <div className="form-group">
              <label>Email address:</label>
              <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
          <label>Class:</label>
          <input type="text" className="form-control" id="class" value={this.props.classname} disabled/>
        </div>
        <button className="btn btn-primary">Submit</button>
     </div>
    );
  }
}
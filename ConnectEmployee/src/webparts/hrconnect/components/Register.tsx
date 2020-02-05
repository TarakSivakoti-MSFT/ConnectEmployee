import * as React from 'react';

export default class Register extends React.Component {


  public render () {
 
    return (
      <div className="row">
          <div className="form-group">
              <label>Email address:</label>
              <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" id="pwd"/>
        </div>
     </div>
    );
  }
}
import * as React from "react";
import style from "../scss/hrcontent.module.scss";
import {
  DateTimePicker,
  DateConvention
} from "@pnp/spfx-controls-react/lib/dateTimePicker";

export default class Hrcontent extends React.Component {
  public render() {
    return (
      <div className={style.hrcontent}>
        <div className="accordion" id="hrcontent">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#pay"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Pay
                </button>
              </h2>
            </div>

            <div id="pay" className="collapse show" data-parent="#hrcontent" >
              <DateTimePicker
                label="Start Date"
                dateConvention={DateConvention.Date}
              />
              <DateTimePicker
                label="End Date"
                dateConvention={DateConvention.Date}
              />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#pto"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PTO
                </button>
              </h2>
            </div>
            <div id="pto" className="collapse" data-parent="#hrcontent">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#benefits"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Benefits
                </button>
              </h2>
            </div>
            <div
              id="benefits"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#hrcontent"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#training"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Training/Dev
                </button>
              </h2>
            </div>
            <div
              id="training"
              className="collapse"
              aria-labelledby="collapseFour"
              data-parent="#hrcontent"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

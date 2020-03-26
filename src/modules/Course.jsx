import React, { Component } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressbar-style.css";

class Course extends Component {
  display() {
    return (
      <div>
        <p>Start date : {this.props.startDate}</p>
        <p>End date : {this.props.endDate}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div id="progress">
              <div style={{ width: "35%" }}>
                <CircularProgressbarWithChildren
                  value={this.props.percent}
                  styles={buildStyles({})}
                >
                  <a href="https://www.google.com">
                    <div className="image">
                      <img
                        style={{ width: 30, marginTop: 0 }}
                        src={this.props.imgUrl}
                        alt="doge"
                      />
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
                <h6>Course name : {this.props.name}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {this.props.percent === 100 ? "COMPLETED" : this.display()}
            </div>
          </div>
          {/* <div className = "row">
                <div className = "col-sm-12">
                    <p>
                        End date : {this.props.endDate}
                    </p>
                </div>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Course;

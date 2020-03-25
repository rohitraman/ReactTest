import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import dataList from "./data";
import Cards from "./Cards";
import Loop from "./AssignedCourses";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.setState({ data: this.getData() });
  }
  getData() {
    return dataList;
  }
  render() {
    return (
      <div className="container-fluid">
        <div id="header" className="header">
          {" "}
        </div>
        <div id="welcomeUser" className="username">
          Hey Anakin, Welcome Back
        </div>
        <div id="welcomeUser" className="liveLeaderboardText">
          Live Leaderboard
        </div>
        <div>
          <Leaderboard dataList={this.state.data} />
        </div>

        <div id="welcomeUser" className="upcomingActivitiesText">
          Upcoming Activities
        </div>

        <div className="container-fluid">
          <Cards />
        </div>
        <div id="welcomeUser" className="assignedCoursesText">
          Assigned Courses
        </div>
        <div className="container-fluid">
          <Loop/>
        </div>
      </div>
    );
  }
}

export default LandingPage;

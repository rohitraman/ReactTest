import React, { Component } from "react";
import '../App.css'
class Leaderboard extends Component {
  render() {
    return (
      <div className="App">
        <table className="leaderBoard table-hover">
          <thead>
            <th>RANK</th>
            <th>NAME</th>
            <th>POINTS</th>
          </thead>
          <tbody>
            {this.props.dataList.map((data, index) => {
              return (
                <tr>
                  <td>{data.rank}</td>
                  <td>{data.name}</td>
                  <td>{data.overall_score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;

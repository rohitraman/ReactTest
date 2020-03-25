import React, { Component } from "react";
import '../App.css'
// import { wait } from "@testing-library/react";
class Leaderboard extends Component {
  render() {
        return (
        <div className="App">
            <table id="leaderTable" className="leaderBoard table-hover">
            <thead>
                <tr>
                    <th>RANK</th>
                    <th>NAME</th>
                    <th>POINTS</th>
                </tr>
            </thead>
            <tbody>
                {this.props.dataList.map((data, index) => {
                return (
                    <tr key={data.rank}>
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

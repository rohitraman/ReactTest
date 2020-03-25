import React, { Component } from 'react';
import Leaderboard from './Leaderboard'
import dataList from "./data";

class LandingPage extends Component{
    constructor()
    {
        super()
        this.state=[dataList]
    }
    render() {
        return (
             <div>
               <div id="header" className="header col-md-12"> </div>
                <div id="welcomeUser" className="username col-md-12">Hey {this.props.name}, Welcome Back</div>
                <div>
                    <Leaderboard dataList={dataList}/>
                </div>
             </div>
        );
    }
}

export default LandingPage
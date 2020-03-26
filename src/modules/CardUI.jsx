import React from 'react';
import "./card-style-upcoming.css";

const CardUI=props=>{
    return(
        <div className="card1">
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Acitivity" className="card-img-top"
                    width="100px" height="200px"
                />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.cardtitle}</h4>
                <h6 className="Date">Date : {props.carddate}</h6>
                <h6 className="Time">Time : {props.cardstarttime}</h6>
                <p className="description">{props.carddescription}</p>
            </div>
        </div>   
        </div> 
    );
}

export default CardUI;
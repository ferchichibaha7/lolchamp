import React from "react";
import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <h1 className="card-name">{props.monster.name}</h1>
    <img className="card-icon" src={props.monster.icon} alt="champIcon"></img>
    <br></br>
    <code className="card-desc">{props.monster.description}</code>
  </div>
);

import React from "react";
import "shared/Card.scss";

const Card = (props) => (
  <div className="card">
    <div className="card-wrapper">
      <div className="card-header">{props.title}</div>
      <div className="card-body">{props.children}</div>
    </div>
  </div>
);

export default Card;

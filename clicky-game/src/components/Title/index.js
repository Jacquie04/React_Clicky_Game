import React from "react";
import "./style.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.propsScore} Highscore: {props.propsHighScore}
    </div>
  </div>
);

export default Title;
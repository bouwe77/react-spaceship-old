import React from "react";

const ButtonCircle = props => (
  <circle cx={props.x} cy={props.y} r={props.radius} fill={props.color} />
);

export default ButtonCircle;

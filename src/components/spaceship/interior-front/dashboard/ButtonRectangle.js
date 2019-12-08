import React from "react";

const ButtonRectangle = props => (
  <rect
    x={props.x}
    y={props.y}
    width={props.width}
    height={props.height}
    fill={props.color}
  />
);

export default ButtonRectangle;

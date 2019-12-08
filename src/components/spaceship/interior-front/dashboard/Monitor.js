import React from "react";

const Monitor = props => {
  return (
    <g>
      <rect
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        fill="Black"
      />
      <line
        x1={props.x + 5}
        y1={props.y + 10}
        x2={props.x + 15}
        y2={props.y + 10}
        stroke="Green"
      />
      <line
        x1={props.x + 5}
        y1={props.y + 15}
        x2={props.x + 15}
        y2={props.y + 15}
        stroke="Green"
      />
      <line
        x1={props.x + 5}
        y1={props.y + 20}
        x2={props.x + 15}
        y2={props.y + 20}
        stroke="Green"
      />
      <line
        x1={props.x + 5}
        y1={props.y + 25}
        x2={props.x + 15}
        y2={props.y + 25}
        stroke="Green"
      />
      <line
        x1={props.x + 5}
        y1={props.y + 30}
        x2={props.x + 15}
        y2={props.y + 30}
        stroke="Green"
      />

      <circle cx={props.x + 40} cy={props.y + 20} r="15" stroke="Green" />
      <circle cx={props.x + 40} cy={props.y + 20} r="10" stroke="Green" />
      <circle cx={props.x + 40} cy={props.y + 20} r="5" stroke="Green" />
      <line
        x1={props.x + 40}
        y1={props.y + 20}
        x2={props.x + 30}
        y2={props.y + 10}
        stroke="Green"
      />

      <line
        x1={props.x + 75}
        y1={props.y + 10}
        x2={props.x + 65}
        y2={props.y + 10}
        stroke="Green"
      />
      <line
        x1={props.x + 75}
        y1={props.y + 15}
        x2={props.x + 65}
        y2={props.y + 15}
        stroke="Green"
      />
      <line
        x1={props.x + 75}
        y1={props.y + 20}
        x2={props.x + 65}
        y2={props.y + 20}
        stroke="Green"
      />
      <line
        x1={props.x + 75}
        y1={props.y + 25}
        x2={props.x + 65}
        y2={props.y + 25}
        stroke="Green"
      />
      <line
        x1={props.x + 75}
        y1={props.y + 30}
        x2={props.x + 65}
        y2={props.y + 30}
        stroke="Green"
      />
    </g>
  );
};

export default Monitor;

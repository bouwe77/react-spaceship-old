import React from "react";

import Star from "./Star";

class Starfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [
        { x: 270, y: 130, radius: 3 },
        { x: 528, y: 202, radius: 1 },
        { x: 103, y: 210, radius: 2 },
        { x: 288, y: 60, radius: 3 },
        { x: 380, y: 90, radius: 1 },
        { x: 150, y: 60, radius: 2 },
        { x: 580, y: 20, radius: 2 }
      ]
    };
  }

  render = props => (
    <g>
      <rect x="0" y="0" width="600" height="300" fill="Black" />
      {this.state.stars.map(star => (
        <Star x={star.x} y={star.y} radius={star.radius} />
      ))}
    </g>
  );
}

export default Starfield;

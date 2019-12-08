import React from "react";

import ButtonRectangle from "./ButtonRectangle";
import ButtonCircle from "./ButtonCircle";
import Monitor from "./Monitor";

//TODO Hier alle props als ints meegeven (met curly brackets dus)

const Dashboard = props => (
  <g>
    <rect x="0" y="240" width="600" height="60" fill="Gray" />
    <ButtonRectangle x="235" y="250" width="10" height="10" color="Red" />
    <ButtonRectangle x="235" y="265" width="10" height="10" color="Red" />
    <ButtonRectangle x="235" y="280" width="10" height="10" color="Red" />
    <ButtonRectangle x="250" y="250" width="10" height="10" color="Blue" />
    <ButtonRectangle x="250" y="265" width="10" height="10" color="Blue" />
    <ButtonRectangle x="250" y="280" width="10" height="10" color="Blue" />
    <ButtonCircle x="45" y="255" radius="5" color="Green" />
    <ButtonCircle x="60" y="270" radius="5" color="Yellow" />
    <ButtonCircle x="45" y="270" radius="5" color="Red" />
    <ButtonCircle x="60" y="255" radius="5" color="Blue" />
    <ButtonRectangle x="40" y="280" width="25" height="10" color="Purple" />
    <Monitor x={115} y={250} width={80} height={40} />{" "}
  </g>
);

export default Dashboard;

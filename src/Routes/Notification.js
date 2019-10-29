import React, { Component } from "react";
 
// component and styles
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";
 
const CHART_DATA = {
  columns: [
    ["data1", 30, 20, 50, 40, 60, 50],
    ["data2", 200, 130, 90, 240, 130, 220],
    ["data3", 300, 200, 160, 400, 250, 250]
  ],
  type: "line"
};

const CHART_DATA2 = {
  columns: [
    ["data1", 30, 20, 50, 40, 60, 50],
    ["data2", 200, 130, 90, 240, 130, 220],
    ["data3", 300, 200, 160, 400, 250, 250]
  ],
  type: "bar"
};

const CHART_DATA3 = {
    columns: [
      ["data1", 30, 20, 50, 40, 60, 50],
      ["data2", 200, 130, 90, 240, 130, 220],
      ["data3", 300, 200, 160, 400, 250, 250]
    ],
    type: "radar"
  };
  const CHART_DATA4 = {
    columns: [
      ["data1", 30, 20, 50, 40, 60, 50],
      ["data2", 200, 130, 90, 240, 130, 220],
      ["data3", 300, 200, 160, 400, 250, 250]
    ],
    type: "donut"
  };
  
class LineChart extends Component {
  render() {
    return (
        <>
            <BillboardChart data={CHART_DATA} />
            <BillboardChart data={CHART_DATA2} />
            <BillboardChart data={CHART_DATA3} />
            <BillboardChart data={CHART_DATA4} />
        </>
    );
  }
}

export default LineChart
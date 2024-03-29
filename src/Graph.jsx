import React from "react";

import { useEffect } from "react";
import Plot from "react-plotly.js";
import { useDispatch, useSelector } from "react-redux";
import BarGraph from "./BarGraph";
import { graph } from "./Redux/Action";
const Graph = () => {
  useEffect(() => {
    dispatch(graph());
  }, []);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.graph);
  console.log(user);

  const gap = Object.entries(user);
  const num = [];
  const name = [];
  console.log(num);
  return (
    <div className="App">
      {gap &&
        gap.length > 0 &&
        gap.map((data) => {
          console.log(data);
          num.push(data[1].counts);
          name.push(data[1].CLINICIAN_NAME);

          return;
        })}
      <div className="graph">
        <Plot
          data={[
            {
              type: "Bar",
              width: 0.8,

              x: num,
              y: name,

              orientation: "h",
            },
          ]}
          layout={{
            width: 800,
            height: 700,
            margin: {
              l: 150,
            },
          }}
        />
      </div>
      <BarGraph />
    </div>
  );
};

export default Graph;

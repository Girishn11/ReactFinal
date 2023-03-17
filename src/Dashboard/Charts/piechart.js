import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  // const { users } = useSelector((state) => state.user);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { dasbhoardPage } = apiget || {};

  const { storage } = dasbhoardPage || {};
  const { available, system, used } = storage || {};
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };
  const data = {
    labels: [
      "Used Storage(18.240GB)",
      "System Storage(6.50GB)",
      "Available Storage(9.150GB)",
    ],
    datasets: [
      {
        data: [used, system, available],
        backgroundColor: ["red", "aqua", "lightgreen"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderwidth: 2,
        radius: 120,
      },
    ],
  };
  return <Pie options={options} data={data} />;
};

export default Piechart;

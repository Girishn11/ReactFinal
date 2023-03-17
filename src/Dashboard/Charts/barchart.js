import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,

  BarElement,
  Title,
  Tooltip,
  Legend
);
const Barchart = () => {
  // const { users } = useSelector((state) => state.user);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { dasbhoardPage } = apiget || {};

  const { performance } = dasbhoardPage || {};
  const { Aqua, Blue, Green, Orange, Purple, Red, Yellow } = performance || {};

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderwidth: 0,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#ffffff",
        },
        title: {
          display: true,
          text: "Hits",
          color: "#ffffff",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        min: 20,
        max: 60,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  const labels = ["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"];

  const data = {
    labels,
    datasets: [
      {
        label: "# Hits",
        data: [Red, Aqua, Green, Yellow, Purple, Orange, Blue],

        backgroundColor: [
          "red",
          "aqua",
          "green",
          "yellow",
          "purple",
          "orange",
          "blue",
        ],
        categoryPercentage: 0.15,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default Barchart;

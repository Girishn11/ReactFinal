import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Linechart = () => {
  // const { users } = useSelector((state) => state.user);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { dasbhoardPage } = apiget || {};

  const { latestHits } = dasbhoardPage || {};
  const { featured, latest, months, popular } = latestHits || {};
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#ffffff",
        },
        min: 10,
        max: 90,
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
      },
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: "Latest Hits",
        data: latest,
        borderColor: "aqua",
        pointStyle: false,
        tension: 0.4,
      },
      {
        label: "Popular Hits",
        data: popular,
        borderColor: "#e83e8c",
        pointStyle: false,
        tension: 0.4,
      },
      {
        label: "Featured",
        data: featured,
        borderColor: "#6610f2",
        pointStyle: false,
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Linechart;

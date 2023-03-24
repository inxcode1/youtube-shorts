import React from "react";
import { Card, CardContent } from "@mui/material";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 15, 40, 22],
      backgroundColor: "rgba(153, 102, 255, 1)",
    },
    {
      label: "Dataset 2",
      data: [15, 10, 25, 30, 32],
      backgroundColor: "rgba(130, 205, 71, 1)",
    },
  ],
};
export const BarGraph = () => {
  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "#f0f0f0" }}>
        <CardContent>
          <Bar 
            options={options} 
            data={data} 
            height={300} 
            width={600} 
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

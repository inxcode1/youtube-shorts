import React from "react";
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
import { Card, CardContent } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 15, 40, 22],
      borderColor: "rgba(153, 102, 255, 1)",
    },
  ],
};

export const LineGraph = () => {
  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "#f0f0f0" }}>
        <CardContent>
          <Line 
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

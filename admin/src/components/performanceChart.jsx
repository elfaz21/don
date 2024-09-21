import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", performance: 50 },
  { name: "Week 2", performance: 90 },
  { name: "Week 3", performance: 78 },
  { name: "Week 4", performance: 85 },
];

const PerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300} style={{ zIndex: -1 }}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="performance"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;

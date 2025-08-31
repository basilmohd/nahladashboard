import React from "react";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Helper to transform responseData into chart data
const transformChartData = (responseData, chartFor) => {
  console.log("Transforming chart data for:", chartFor);
  console.log("Response Data:", responseData);
  if (!responseData?.range || !responseData?.label) return [];

  const labels = responseData?.label;
  const labelindex = labels.findIndex(
    (label) => label.toLowerCase() === chartFor.toLowerCase()
  );

  const ranges = responseData.range;

  let value = [];
  let label = [];
  if (labelindex > -1) {
    ranges.forEach((entry) => {
      value.push(entry.value[labelindex]);
      label.push(entry.date);
    });

    console.log("value", value);
    return {
      label: label,
      value: value,
    };
  } else {
    return null;
  }
};

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28FD0",
  "#FF6F91",
  "#845EC2",
  "#D65DB1",
  "#FF9671",
];

const SimpleAnalyticsChart = ({ responseData, chartFor }) => {
  const chartData = transformChartData(responseData, chartFor);
  console.log("Transformed Chart Data:", chartData);
  const labels = responseData?.label || [];

  if (!chartData) return <div>No chart data available.</div>;

  return (
    <>
      {/* <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} style={{ width: "100%" }}>
            <defs style={{ width: "100%" }}>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area dataKey="value" fill="url(#area-gradient)" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#007bff"
              fill="url(#area-gradient)"
              name={chartFor}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div> */}

      <div style={{ marginBottom: "20px" }}>
        <p>Chart for {chartFor}</p>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={chartData.label.map((label, idx) => ({
              label,
              value: chartData.value[idx],
            }))}
          >
            <defs>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#007bff"
              fill="url(#area-gradient)"
              name= {chartFor}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SimpleAnalyticsChart;

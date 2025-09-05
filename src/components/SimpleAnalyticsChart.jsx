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

  const ranges = responseData?.range;

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
  // const chartData = transformChartData(responseData, chartFor);
  let chartData;
  console.log("Transformed Chart Data:", chartData);
  if (chartFor.length > 1) {
    const combinedData = { label: [], value: [] };
    chartFor.forEach((chart) => {
      const singleChartData = transformChartData(responseData, chart);
      if (singleChartData) {
        combinedData.label = singleChartData.label; // Assuming all charts have the same labels
        combinedData.value.push(singleChartData.value);
      }
    });
    chartData = combinedData;
    console.log("Combined Chart Data:", combinedData);
  } else {
    const singleChartData = transformChartData(responseData, chartFor[0]);
    chartData = singleChartData;
  }

  const labels = responseData?.label || [];

  if (!chartData) return <div>No chart data available.</div>;

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {chartFor.length > 1 ? (
          <>
            <p style={{fontSize: "large", fontWeight: 600, marginBottom: "1rem" }}>
              Chart for {chartFor[0]} vs {chartFor[1]}
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={chartData.label.map((label, idx) => ({
                  label,
                  planned: chartData.value[0][idx],
                  actual: chartData.value[1][idx],
                }))}
              >
                <defs>
                  <linearGradient
                    id="area-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area dataKey="planned" fill="url(#area-gradient)" />
                <Area dataKey="actual" fill="url(#area-gradient)" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </>
        ) : (
          <>
            <p style={{fontSize: "large", fontWeight: 600, marginBottom: "1rem" }}>
              Chart for {chartFor[0]}
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={chartData.label.map((label, idx) => ({
                  label,
                  value: chartData.value[idx],
                }))}
              >
                <defs>
                  <linearGradient
                    id="area-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
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
                  name={chartFor}
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    </>
  );
};

export default SimpleAnalyticsChart;

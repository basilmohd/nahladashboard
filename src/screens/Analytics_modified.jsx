import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, LineChart, Pie, PieChart, Cell, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid
} from "recharts";
import SimpleAnalyticsChart from '../components/SimpleAnalyticsChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Analytics_mod = () => {

  const { promptError, promptData } = useSelector((state) => state.promptData);
  const { dataError, data } = useSelector((state) => state.data);
  const { premativeError, premativeData } = useSelector((state) => state.premativeData);

  const [chartTypes, setChartTypes] = useState({
    "Float Stats": "bar",
    "Calculated Data": "bar"
  });
  const [menuOpen, setMenuOpen] = useState({});

  const [selectedChart, setSelectedChart] = useState('line');


  // console.log("premativeData?.Task_Status", premativeData?.Task_Status)


  const getErrorMessage = () => {
    if (promptError) return promptError?.error;
    if (dataError) return dataError;
    if (premativeError) return premativeError;
    return null;
  };

  const responseData = promptData || data || premativeData;

  console.log("responseData", responseData)
 

  if (!responseData) {
    return (
      <div style={{ marginLeft: '280px', padding: '20px' }}>
        {getErrorMessage() ? (
          <div style={{ color: 'red' }}>
            <b>Error:</b> {getErrorMessage()}
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    );
  }


  const chartSections = {
    "Task Status": responseData?.Task_Status,
    "Labour Hours": responseData?.Labour_Hours,
    // "Total Cost": responseData?.Total_Cost,
    "Total Tasks": responseData?.Total_Tasks_Statistics,
    "Float Stats": responseData?.Float_Statistics,
    "Calculated Data": responseData?.calculated_data,
    "Non Labour Hours": responseData?.Non_Labour_Hours,

    // "Project Dates": responseData?.Project_dates,
  };



  const toggleMenu = (section) => {
    setMenuOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const changeChartType = (section, chartType) => {
    setChartTypes((prev) => ({
      ...prev,
      [section]: chartType,
    }));
  };


  const isFlatChartData = responseData?.lineChart && responseData?.barChart && responseData?.pieChart;


  const LineChartData = { 
    labels: responseData?.lineChart?.label,
    datasets: [
      {
        label: 'Dataset',
        data: responseData?.lineChart?.value,
        borderColor: ['red', 'blue', 'orange', 'green', 'red', 'blue'],
        backgroundColor: ['rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(243, 243, 52, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)'],
        fill: true,
      },
    ],
  };

  const BarChartData = {
    labels: responseData?.barChart?.label,
    datasets: [
      {
        label: 'Dataset',
        data: responseData?.barChart?.value,
        borderColor: ['red', 'blue', 'orange', 'green', 'red', 'blue'],
        backgroundColor: ['rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(243, 243, 52, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)'],
        fill: true,
      },
    ],
  };


  const PieChartData = {
    labels: responseData?.pieChart?.label,
    datasets: [
      {
        label: 'Dataset',
        data: responseData?.pieChart?.value,
        borderColor: ['red', 'blue', 'orange', 'green', 'red', 'blue'],
        backgroundColor: ['rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(243, 243, 52, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)'],
        fill: true,
      },
    ],
  };

  const labelMap = {
    "Data Date": "Date",
    "Project Start Date": "Start",
    "Project End Date": "End",
    "Planned Progress (%)": "PP",
    "Actual Progress (%)": "AP",
    "Budget": "BD",
    "Planned Value (PV)": "PV",
    "Earned Value (EV)": "EV",
    "Schedule Variance (SV)": "SV",
    "Cost Variance (CV)": "CV",
    "Schedule Performance Index (SPI)": "SPI",
    "Cost Performance Index (CPI)": "CPI",
    "Estimate at Completion (EAC)": "EAC",
    "Estimate to Complete (ETC)": "ETC",
    "Variance at Completion (VAC)": "VAC",
    "Estimated Project End Date": "Est. End",
    "Percentage of Tasks Completed": " %"

  };

  const desiredKeys = [
    "Planned Progress (%)",
    "Actual Progress (%)",
    "Planned Value (PV)"
  ];

  const desiredKeys2 = [
    "Planned Progress (%)",
    "Actual Progress (%)",
    "Budget",
  ];

  let LineData = [];
  let barData = [];
  let pieData1 = [];

  if (isFlatChartData) {
    console.log("Flat chart data detected");
    console.log("responseData.lineChart.label", responseData.lineChart.label);
    LineData = responseData.lineChart.label.map((label, index) => ({
      name: labelMap[label] || label,
      value: responseData.lineChart.value[index],
      rawLabel: label
    })).filter(item => desiredKeys.includes(item.rawLabel) && typeof item.value === "number")
    console.log("Filtered LineData >>>", LineData);

    barData = responseData.barChart.label.map((label, index) => ({
      name: labelMap[label] || label,
      value: responseData.barChart.value[index],
      rawLabel: label


    })).filter(item => desiredKeys2.includes(item.rawLabel) && typeof item.value === "number")
    console.log("Filtered barData >>>", barData);

    pieData1 = responseData.pieChart.label.map((label, index) => ({
      name: labelMap[label] || label,
      value: responseData.pieChart.value[index],
      rawLabel: label


    })).filter(item => desiredKeys2.includes(item.rawLabel) && typeof item.value === "number")
    console.log("Filtered pieData1 >>>", pieData1);

  }



  // const pieData = responseData.pieChart.label
  //   .map((label, index) => ({
  //     name: label,
  //     value: responseData.pieChart.value[index]
  //   })).filter(item => typeof item.value === "number");
  //   console.log("Filtered pieData >>>", pieData);

  const pieData = [

    { name: 'Planned Progress (%)', value: 20 },
    { name: 'Actual Progress (%)', value: 15 },
    { name: 'Budget', value: 15043 },
    { name: 'Planned Value (PV)', value: 3008.6000000000004 },
    { name: 'Earned Value (EV)', value: 2256.45 },
    { name: 'Schedule Variance (SV)', value: -752.1500000000005 },
    { name: 'Cost Variance (CV)', value: -4243.55 },
    { name: 'Schedule Performance Index (SPI)', value: 0.7499999999999999 },
    { name: 'Cost Performance Index (CPI)', value: 0.3471461538461538 },
    { name: 'Estimate at Completion (EAC)', value: 43333.333333333336 },
    { name: 'Estimate to Complete (ETC)', value: 41076.88333333334 },
    { name: 'Variance at Completion (VAC)', value: -28290.333333333336 },
    { name: 'Percentage of Tasks Completed', value: 15 },
  ];


  const COLORS = [
    'rgba(70, 168, 214, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(37, 92, 241, 0.8)',
    'rgba(8, 71, 187, 0.8)',
    'rgba(36, 45, 165, 0.8)',
    'rgba(21, 93, 175, 0.8)',
    'rgba(70, 168, 214, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(37, 92, 241, 0.8)',
    'rgba(8, 71, 187, 0.8)',
    'rgba(36, 45, 165, 0.8)',
    'rgba(21, 93, 175, 0.8)',
    'rgba(21, 93, 175, 0.8)',

  ];

  let Labour_Hours = [];
  console.log("isFlatChartData", isFlatChartData);
  if (!isFlatChartData && responseData?.Labour_Hours?.lineChart?.label) {
    Labour_Hours = responseData.Labour_Hours.lineChart.label.map((label, index) => ({
      LabourLabel: label,
      LabourValue: responseData.Labour_Hours.lineChart.value[index],
      LabourValue2: responseData.Non_Labour_Hours.lineChart.value[index],
    }));
  }


  return (
    <>
      {/* {isFlatChartData ? (

        <div className="container p-4" style={{ marginLeft: '200px', padding: '20px', width: "100%" }}>
          <h2 style={{ marginTop: "15px" }}>Analytics</h2>

          <div className="row g-4" style={{ width: "115%", marginTop: "15px" }}>
            <div className="col-md-6">
              <div style={{ marginBottom: '40px' }}>
                <div className="p-3 bg-white" style={{
                  borderRadius: "15px",
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                  height: "100%"
                }}>
                  <h2>Line Chart</h2>
                  {console.log("LineData", LineData)}
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={LineData} style={{ width: "100%" }}>
                      <defs style={{ width: "100%" }}>
                        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                          <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area dataKey="value" fill="url(#area-gradient)" />
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-md-6">

              <div style={{ marginBottom: '40px' }}>
                <div className="p-3 bg-white" style={{
                  borderRadius: "15px",
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                  height: "100%"
                }}>
                  <h2>Bar Chart</h2>

                  <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={barData} style={{ width: "100%" }}>
                      <defs>
                        <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                          <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="url(#bar-gradient)" barSize={10} radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
            <div className="col-md-6">


              <div style={{ marginBottom: '40px' }}>
                <div className="p-3 bg-white" style={{
                  borderRadius: "15px",
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                  height: "100%"
                }}>
                  <h2>Pie Chart</h2>

                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
                        </filter>
                      </defs>

                      <Pie
                        data={pieData1}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        fill="#3A53F3"
                        dataKey="value"
                        label
                        filter="url(#shadow)"
                      >
                        {pieData1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>
          </div>

        </div>

      ) : (

        <>
          <div className="container p-4">
            <div className="row g-4">
              <div className="col-md-6">

                {responseData?.Labour_Hours && responseData?.Non_Labour_Hours && (
                  <div className="p-3 bg-white" style={{
                    borderRadius: "15px",
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                    height: "100%"
                  }}>
                    <h4>Labour Hours vs Non Labour Hours</h4>


                    <ResponsiveContainer width="100%" height={300}>
                      <p>Line Chart</p>
                      {console.log("Labour_Hours", Labour_Hours)}
                      <AreaChart data={Labour_Hours} style={{ width: "100%" }}>
                        <defs style={{ width: "100%" }}>
                          <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                            <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="pink" stopOpacity={1} />
                            <stop offset="100%" stopColor="pink" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area dataKey="LabourValue" fill="url(#area-gradient)" />
                        <Area dataKey="LabourValue2" fill="url(#area-gradient)" />

                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="LabourLabel" />
                        <YAxis />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>


              {Object.entries(chartSections).map(([sectionTitle, chartData], index) =>
                chartData?.lineChart && chartData?.barChart && chartData?.pieChart ? (
                  <div key={sectionTitle} className="col-md-6">
                    <div className="p-3 rounded" style={{ boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)", height: "100%" }}>

                      {["Float Stats", "Calculated Data"].includes(sectionTitle) ? null : (
                        <div onClick={() => toggleMenu(sectionTitle)} style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
                          <h4 className="mb-3">{sectionTitle.replace(/_/g, ' ')}</h4>
                          <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                            <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                          </div>

                          {menuOpen[sectionTitle] && (
                            <div
                              style={{
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                background: "#fff",
                                border: "1px solid #ccc",
                                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                                zIndex: 100,
                                padding: 8,
                                marginTop: -15
                              }}
                            >
                              <select
                                value={chartTypes[sectionTitle] || 'line'}
                                onChange={(e) => changeChartType(sectionTitle, e.target.value)}
                                style={{ border: 'none', fontSize: '14px', background: "none" }}
                              >
                                <option value="line">Line Graph</option>
                                <option value="bar">Bar Graph</option>
                                <option value="pie">Pie Graph</option>
                              </select>
                            </div>
                          )}
                        </div>
                      )}

                      {["Float Stats", "Calculated Data"].includes(sectionTitle) ? (
                        <div style={{ overflowX: "auto" }}>
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Label</th>
                                <th>Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {chartData.barChart.label
                                .map((label, idx) => ({
                                  label,
                                  value: chartData.barChart.value[idx]
                                }))
                                .filter(
                                  ({ label }) =>
                                    ![
                                      "Planned Value (PV)",
                                      "Earned Value (EV)",
                                      "Schedule Performance Index (SPI)",
                                      "Cost Performance Index (CPI)"
                                    ].includes(label)
                                )
                                .map(({ label, value }, idx) => (
                                  <tr key={idx}>
                                    <td>{label}</td>
                                    <td>{Number(value).toLocaleString()}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <>
                          {(chartTypes[sectionTitle] || "line") === "line" && (
                            <div style={{ marginBottom: "20px" }}>
                              <p>Line Chart</p>
                              {console.log("chartData", chartData.lineChart)}
                              {console.log("section title", sectionTitle)}
                              <ResponsiveContainer width="100%" height={300}>
                                <AreaChart
                                  data={chartData.lineChart.label.map((label, idx) => ({
                                    label,
                                    value: Number(chartData.lineChart.value[idx]) || 0,
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
                                    name={sectionTitle.replace(/_/g, " ")}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          )}

                          {chartTypes[sectionTitle] === "bar" && (
                            <div style={{ marginBottom: "20px" }}>
                              <p>Bar Chart</p>
                              <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                  data={chartData.barChart.label.map((label, idx) => ({
                                    label,
                                    value: Number(chartData..value[idx]) || 0,
                                  }))}
                                >
                                  <defs>
                                    <linearGradient id={`bar-gradient`} x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                      <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                                    </linearGradient>
                                  </defs>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="label" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar
                                    dataKey="value"
                                    name={sectionTitle.replace(/_/g, " ")}
                                    fill={`url(#bar-gradient)`}
                                    barSize={10}
                                    radius={[10, 10, 0, 0]}
                                  />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          )}

                          {chartTypes[sectionTitle] === "pie" && (
                            <div style={{ marginBottom: "20px" }}>
                              <p>Pie Chart</p>
                              <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                  <defs>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                      <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
                                    </filter>
                                  </defs>
                                  <Pie
                                    data={chartData.pieChart.label.map((label, idx) => ({
                                      name: label,
                                      value: Number(chartData.pieChart.value[idx]) || 0,
                                    }))}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={120}
                                    fill="#3A53F3"
                                    filter="url(#shadow)"
                                    label
                                  >
                                    {chartData.pieChart.label.map((_, idx) => (
                                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ) : null
              )}


            </div>
          </div>

        </>
      )
      } */}

      <div className="container p-4">
        <div className="row g-4">
          <div className="col-md-6">
            <SimpleAnalyticsChart responseData={responseData} chartFor="Planned Progress (%)" />
          </div>
          <div className="col-md-6">
            <SimpleAnalyticsChart responseData={responseData} chartFor="Actual Progress (%)" />
          </div>
        </div>
      </div>    
    </>
  );
}

export default Analytics_mod;

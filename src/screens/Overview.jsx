import React, { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid
} from "recharts";


const dummyData = [
  { name: "01", option1: 20, option2: 40 },
  { name: "02", option1: 35, option2: 45 },
  { name: "03", option1: 50, option2: 60 },
  { name: "04", option1: 30, option2: 50 },
  { name: "05", option1: 40, option2: 65 },
  { name: "06", option1: 60, option2: 70 },
  { name: "07", option1: 75, option2: 80 },
  { name: "08", option1: 90, option2: 100 },
];

const projectData = [
  { name: "PV", value: 20000 },
  { name: "EV", value: 30000 },
  { name: "SV", value: 25000 },
  { name: "CV", value: -5000 },
  { name: "SPI", value: 15000 },
  { name: "CPI", value: 10000 },
  { name: "EAC", value: 45000 },
  { name: "ETC", value: 30000 },
  { name: "VAC", value: -15000 },
];

const pieData = [
  { name: "Spread", value: 43 },
  { name: "Loss", value: 86 },
  { name: "Income", value: 67 },
];

const COLORS = ["#3A53F3", "#1A1AFF", "#101F96"];


export default function Overview() {

  const [lineChart, setLineChart] = useState(true)
  const [barChart, setBarChart] = useState(true)
  const [pieChart, setPieChart] = useState(true)

  return (
    <div className="container p-4" style={{ marginLeft: '230px', padding: '20px', width: "100%" }}>

        <h2 style={{ marginTop: "15px" }}>Analytics Overview</h2>
      <div className="row g-4" style={{ width: "120%", marginTop: "15px" }}>
        <div className="col-md-6">
          <div className="p-3" style={{
            background: 'linear-gradient(to left, #0728e6, #010d57)',
            borderRadius: "15px",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
            height: "100%",
            color: "white"
          }}>
            <h5 className="mb-3">Statistics</h5>
            <ResponsiveContainer width="100%" height={200}>
              <p style={{ paddingLeft: "10px" }}>Statistic summary or chart goes here.</p>
            </ResponsiveContainer>
          </div>
        </div>

        {lineChart && <div className="col-md-6">
          <div className="p-3 bg-white" style={{
            borderRadius: "15px",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            height: "100%"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              <h5 className="mb-3">Line Chart</h5>
              <select defaultValue="menu" onChange={(e) => {
                if (e.target.value === "remove") {
                  setLineChart(false);
                }
              }}>
                <option value="menu" disabled>
                  Menu
                </option>
                <option>color</option>
                <option>edit</option>
                <option value="remove">remove</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={projectData}>
                <defs>
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
        </div>}

        {barChart && <div className="col-md-6">
          <div className="p-3 bg-white " style={{
            borderRadius: "15px",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            height: "100%"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              <h5 className="mb-3">Bar Chart</h5>

              <select defaultValue="menu" onChange={(e) => {
                if (e.target.value === "remove") {
                  setBarChart(false);
                }
              }}>
                <option value="menu" disabled>
                  Menu
                </option>
                <option>color</option>
                <option>edit</option>
                <option value="remove">remove</option>
              </select>

            </div>
            <ResponsiveContainer width="100%" height={400} style={{marginTop:"10px"}}>
              <BarChart data={projectData}>
                <defs>
                  <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="url(#bar-gradient)" barSize={20} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>}

        {pieChart && <div className="col-md-6">
          <div className="p-3 bg-white  text-center" style={{
            borderRadius: "15px",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            height: "100%"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              <h5 className="mb-3">Pie Chart</h5>
              <select defaultValue="menu"
                onChange={(e) => {

                  if (e.target.value === "remove") {
                    setPieChart(false);
                  }
                }}>
                <option value="menu" disabled>
                  Menu
                </option>
                <option>color</option>
                <option>edit</option>
                <option value="remove">remove</option>
              </select>

            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart >
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
                  </filter>
                </defs>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  fill="#3A53F3"
                  dataKey="value"
                  label
                  filter="url(#shadow)"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

            </ResponsiveContainer>
            {pieData.map((item, index) => {
              return (
                <div>
                  <p><b></b>{item.name}: {item.value}</p>
                </div>
              )
            })}
          </div>
        </div>}

      </div>

      {/* <div className="col-md-3" style={{ width: "20%" }}>
          <div className="border rounded shadow-sm p-3 text-center">
            <h5>Targets</h5>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#3A53F3" strokeWidth="10" strokeDasharray="267" strokeDashoffset="40" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#AAB3FF" strokeWidth="10" strokeDasharray="188" strokeDashoffset="56" />
            </svg>
            <div className="mt-2">
              <p>Weekly Targets: 85%</p>
              <p>Monthly Targets: 70%</p>
            </div>
          </div>
        </div> */}

      {/* <div className="col-md-3">
          <div className="border rounded shadow-sm p-3 text-center">
            <h2>789</h2>
            <p className="text-muted">Projects</p>
          </div>
        </div> */}


    </div>
  );
}
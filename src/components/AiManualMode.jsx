// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement, CategoryScale, LinearScale } from 'chart.js';
// import {
//   BarChart, Bar, LineChart, Pie, PieChart, Cell, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid
// } from "recharts";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import "./style.css";
// import ReactSpeedometer from "react-d3-speedometer";

// ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement, CategoryScale, LinearScale);

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//   },
//   elements: {
//     line: {
//       tension: 0.3,
//     },
//     point: {
//       radius: 8,
//     },
//   },
//   scales: {
//     x: {
//       beginAtZero: true,
//       grid: {
//         display: true,
//       },
//     },
//     y: {
//       beginAtZero: true,
//       grid: {
//         display: true,
//       },
//     },
//   },
// };

// export const AiManualMode = () => {
//   const [name, setName] = useState('')
//   const [name2, setName2] = useState('')
//   const [description, setDescription] = useState('')
//   const [projectStartDate, setProjectStartDate] = useState(null)
//   const [projectEndDate, setProjectEndDate] = useState(null)
//   const [projectSummary, setProjectSummary] = useState('')
//   const [inputs, setInputs] = useState([{ label: '', value: '', value2: '' }])
//   const [chartData, setChartData] = useState(null)
//   const [selectedPlanChart, setSelectedPlanChart] = useState('line')
//   const [selectedBudgetChart, setSelectedBudgetChart] = useState('line')
//   const [selectedEarnedChart, setSelectedEarnedChart] = useState('line')

//   const [showChart, setShowChart] = useState(false)
//   const [enableComparison, setEnableComparison] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [planVsActualAdded, setPlanVsActualAdded] = useState(false)
//   const [budget, setBudget] = useState(false)
//   const [earned, setEarned] = useState(false)
//   const [spi, setSPI] = useState(false)
//   const [cpi, setCPI] = useState(false)
//   const [spiValue, setSPIValue] = useState('')
//   const [cpiValue, setCPIValue] = useState('')

//   const [form, setForm] = useState(false)

//   const [showNormalGraph, setNormalShowGraph] = useState(true);


//   const [planname, setPlanName] = useState('Plan')
//   const [planname2, setPlanName2] = useState('Actual')
//   const [planinputs, setPlanInputs] = useState([{ planLabel: '', planValue: '', planValue2: '' }])

//   const [budgetName, setBudgetName] = useState('Budget')
//   const [budgetInputs, setBudgetInputs] = useState([{ budgetLabel: '', budgetValue: '' }])


//   const [earnedName, setEarnedName] = useState('Earned')
//   const [earnedInputs, setEarnedInputs] = useState([{ earnedLabel: '', earnedValue: '' }])


//   const [planChartData, setPlanChartData] = useState(null)
//   const [showPlanGraph, setPlanShowGraph] = useState(true);

//   const [budgetChartData, setBudgetChartData] = useState(null)
//   const [showBudgerGraph, setBudgetShowGraph] = useState(true);

//   const [earnedChartData, setEarnedChartData] = useState(null)
//   const [showEarnedGraph, setEarnedShowGraph] = useState(true);


//   const [spiChartValue, setSPIChartValue] = useState(null)
//   const [showSpiGraph, setSpiShowGraph] = useState(true);

//   const [cpiChartValue, setCPIChartValue] = useState(null)
//   const [showCpiGraph, setCpiShowGraph] = useState(true);

//   const [planMenuOpen, setPlanMenuOpen] = useState(false);
//   const [budgetMenuOpen, setBudgetMenuOpen] = useState(false);
//   const [earnedMenuOpen, setEarnedMenuOpen] = useState(false);
//   const [spiMenuOpen, setSpiMenuOpen] = useState(false);
//   const [cpidMenuOpen, setCpiMenuOpen] = useState(false);

//   const handleInputChange = (index, e) => {
//     const { name, value } = e.target
//     const newInputs = [...inputs]
//     newInputs[index][name] = value
//     setInputs(newInputs)

//   };

//   const handlePlanInputChange = (index, e) => {
//     const { name, value } = e.target
//     const newPlanInputs = [...planinputs]
//     newPlanInputs[index][name] = value
//     setPlanInputs(newPlanInputs)

//   };

//   const handleBudgetInputChange = (index, e) => {
//     const { name, value } = e.target
//     const newBudgetInputs = [...budgetInputs]
//     newBudgetInputs[index][name] = value
//     setBudgetInputs(newBudgetInputs)
//   };

//   const handleEarnedInputChange = (index, e) => {
//     const { name, value } = e.target
//     const newEarnedInputs = [...earnedInputs]
//     newEarnedInputs[index][name] = value
//     setEarnedInputs(newEarnedInputs)
//   };


//   const addInputField = () => {
//     setInputs([...inputs, { label: '', value: '', value2: '' }])
//   };
//   const addPlanInputField = () => {
//     setPlanInputs([...planinputs, { planLabel: '', planValue: '', planValue2: '' }])
//   };

//   const addBudgetInputField = () => {
//     setBudgetInputs([...budgetInputs, { budgetLabel: '', budgetValue: '' }])
//   };

//   const addEarnedInputField = () => {
//     setEarnedInputs([...earnedInputs, { earnedLabel: '', earnedValue: '' }])
//   };

//   const deleteInputField = () => {
//     setInputs(prevInputs => prevInputs.slice(0, -1))
//   }
//   const deletePlanInputField = () => {
//     setPlanInputs(prevInputs => prevInputs.slice(0, -1))
//   }

//   const deleteBudgetInputField = () => {
//     setBudgetInputs(prevInputs => prevInputs.slice(0, -1));
//   }
//   const deleteEarnedInputField = () => {
//     setEarnedInputs(prevInputs => prevInputs.slice(0, -1))
//   }

//   const handleInitialSubmit = (e) => {
//     e.preventDefault()
//     setForm(true)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const labels = inputs.map(item => item.label);
//     const values = inputs.map(item => parseFloat(item.value))
//     const datasets = [
//       {
//         label: name,
//         data: values,
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 400)
//           gradient.addColorStop(0, 'blue')
//           gradient.addColorStop(1, 'lightBlue')
//           return gradient
//         },
//         borderColor: 'blue',
//         borderWidth: 1,
//         // fill: selectedChart === 'line',
//         pointBackgroundColor: 'rgb(50, 96, 182)',
//       }
//     ];

//     if (enableComparison) {
//       const values2 = inputs.map(item => parseFloat(item.value2) || 0);
//       datasets.push({
//         label: name2,
//         data: values2,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//         fill: false,
//         pointBorderColor: 'rgba(0, 255, 0, 1)',
//       });
//     }

//     const hasChartData = inputs.some(input => input.label && input.value)
//     setChartData({ labels, datasets })
//     setNormalShowGraph(hasChartData)

//     setChartData({ labels, datasets })

//     const planLabels = planinputs.map(item => item.planLabel)
//     const planData1 = planinputs.map(item => parseFloat(item.planValue))
//     const planData2 = planinputs.map(item => parseFloat(item.planValue2))
//     const planDatasets = [
//       {
//         label: planname,
//         data: planData1,
//         backgroundColor: 'rgba(54, 162, 235, 0.5)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1
//       },
//       {
//         label: planname2,
//         data: planData2,
//         backgroundColor: 'rgba(255, 206, 86, 0.5)',
//         borderColor: 'rgba(255, 206, 86, 1)',
//         borderWidth: 1
//       }
//     ]
//     const hasPlanData = planinputs.some(input => input.planLabel && input.planValue)
//     setPlanChartData({ labels: planLabels, datasets: planDatasets })
//     setPlanShowGraph(hasPlanData)

//     const budgetLabels = budgetInputs.map(item => item.budgetLabel)
//     const budgetData = budgetInputs.map(item => parseFloat(item.budgetValue))
//     const budgetDataset = [
//       {
//         label: budgetName,
//         data: budgetData,
//         backgroundColor: 'rgba(75, 192, 192, 0.5)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1
//       }
//     ]

//     const hasBudgetData = budgetInputs.some(input => input.budgetLabel && input.budgetValue)
//     setBudgetChartData({ labels: budgetLabels, datasets: budgetDataset })
//     setBudgetShowGraph(hasBudgetData)

//     const earnedLabels = earnedInputs.map(item => item.earnedLabel);
//     const earnedData = earnedInputs.map(item => parseFloat(item.earnedValue));
//     const earnedDataset = [
//       {
//         label: earnedName,
//         data: earnedData,
//         backgroundColor: 'rgba(153, 102, 255, 0.5)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1
//       }
//     ]
//     const hasEarnedData = earnedInputs.some(input => input.earnedLabel && input.earnedValue)
//     setEarnedChartData({ labels: earnedLabels, datasets: earnedDataset })
//     setEarnedShowGraph(hasEarnedData)

//     setSPIChartValue(parseFloat(spiValue))
//     setSpiShowGraph(!isNaN(parseFloat(spiValue)))

//     setCPIChartValue(parseFloat(cpiValue))
//     setCpiShowGraph(!isNaN(parseFloat(cpiValue)))


//     setShowChart(true)
//   };

//   const handleFormSelection = (formType) => {
//     if (formType === 'planVsActual' && !planVsActualAdded) {
//       setPlanVsActualAdded(true);
//     }

//     if (formType === 'Budget' && !budget) {
//       setBudget(true);
//     }

//     if (formType === 'Earned' && !earned) {
//       setEarned(true)
//     }

//     if (formType === 'SPI' && !spi) {
//       setSPI(true)
//     }

//     if (formType === 'CPI' && !cpi) {
//       setCPI(true)
//     }
//     setIsModalOpen(false)
//   };
//   const handleEdit = (formType) => {
//     if (formType === 'planActive') {
//       setShowChart(false)
//       setPlanVsActualAdded(true);
//       setBudget(false);
//       setEarned(false)
//       setSPI(false)
//       setCPI(false)


//     }

//     if (formType === 'budget') {
//       setShowChart(false)
//       setPlanVsActualAdded(false);
//       setBudget(true);
//       setEarned(false)
//       setSPI(false)
//       setCPI(false)


//     }
//     if (formType === 'earned') {
//       setShowChart(false)
//       setPlanVsActualAdded(false);
//       setBudget(false);
//       setEarned(true)
//       setSPI(false)
//       setCPI(false)


//     }

//     if (formType === 'SPI') {
//       setShowChart(false)
//       setPlanVsActualAdded(false);
//       setBudget(false);
//       setEarned(false)
//       setSPI(true)
//       setCPI(false)


//     }

//     if (formType === 'CPI') {
//       setShowChart(false)
//       setPlanVsActualAdded(false);
//       setBudget(false);
//       setEarned(false)
//       setSPI(false)
//       setCPI(true)


//     }

//     // if (formType === 'Budget' && !budget) {
//     //   setBudget(true);
//     // }

//     // if (formType === 'Earned' && !earned) {
//     //   setEarned(true)
//     // }

//     // if (formType === 'SPI' && !spi) {
//     //   setSPI(true)
//     // }

//     // if (formType === 'CPI' && !cpi) {
//     //   setCPI(true)
//     // }
//   }

//   const handleClose = () => {
//     setNormalShowGraph(false)
//   }

//   const handlePlanClose = () => {
//     setPlanShowGraph(false);
//     setPlanInputs([{ planLabel: '', planValue: '', planValue2: "  " }])

//   };

//   const handleBudgetClose = () => {
//     setBudgetShowGraph(false);
//     setBudgetInputs([{ budgetLabel: '', budgetValue: '' }])

//   };
//   const handleEarnedClose = () => {
//     setEarnedShowGraph(false);
//     setEarnedInputs([{ earnedLabel: '', earnedValue: '' }])
//   };
//   const handleSpiClose = () => {
//     setSpiShowGraph(false);
//   };
//   const handleCpiClose = () => {
//     setCpiShowGraph(false);
//   };

//   const sanitizedPlanInputs = planinputs.map(input => ({
//     label: input.planLabel,
//     planValue: Number(input.planValue),
//     planValue2: Number(input.planValue2),

//   }));

//   const sanitizedBudgetInputs = budgetInputs.map(input => ({
//     label: input.budgetLabel,
//     budgetValue: Number(input.budgetValue),
//   }));

//   const sanitizedEarnedInputs = earnedInputs.map(input => ({
//     label: input.earnedLabel,
//     earnedValue: Number(input.earnedValue),
//   }));



//   const COLORS = [
//     'rgba(70, 168, 214, 0.8)',
//     'rgba(54, 162, 235, 0.8)',
//     'rgba(37, 92, 241, 0.8)',
//     'rgba(8, 71, 187, 0.8)',
//     'rgba(36, 45, 165, 0.8)',
//     'rgba(21, 93, 175, 0.8)',
//     'rgba(70, 168, 214, 0.8)',
//     'rgba(54, 162, 235, 0.8)',
//     'rgba(37, 92, 241, 0.8)',
//     'rgba(8, 71, 187, 0.8)',
//     'rgba(36, 45, 165, 0.8)',
//     'rgba(21, 93, 175, 0.8)',
//     'rgba(21, 93, 175, 0.8)',

//   ];



//   const pieData = [

//     { name: 'Planned Progress (%)', value: 20 },
//     { name: 'Actual Progress (%)', value: 15 },
//     { name: 'Budget', value: 15043 },
//     { name: 'Planned Value (PV)', value: 3008.6000000000004 },
//     { name: 'Earned Value (EV)', value: 2256.45 },
//     { name: 'Schedule Variance (SV)', value: -752.1500000000005 },
//     { name: 'Cost Variance (CV)', value: -4243.55 },
//     { name: 'Schedule Performance Index (SPI)', value: 0.7499999999999999 },
//     { name: 'Cost Performance Index (CPI)', value: 0.3471461538461538 },
//     { name: 'Estimate at Completion (EAC)', value: 43333.333333333336 },
//     { name: 'Estimate to Complete (ETC)', value: 41076.88333333334 },
//     { name: 'Variance at Completion (VAC)', value: -28290.333333333336 },
//     { name: 'Percentage of Tasks Completed', value: 15 },
//   ];


//   console.log("budgetInputs>>", budgetInputs)


//   return (
//     <div style={{ width: '80%', margin: '0 auto' }}>
//       {!showChart ? (
//         <>
//           <Form onSubmit={handleInitialSubmit}>
//             {!form ? (<>
//               <div style={{ marginBottom: '15px' }}>
//                 {/* <Form.Check
//                   type="checkbox"
//                   label="Enable Comparison Graph"
//                   checked={enableComparison}
//                   onChange={() => setEnableComparison(!enableComparison)}
//                 /> */}
//                 <div style={{ marginBottom: '15px' }}>
//                   {/* <select
//                     value={selectedChart}
//                     onChange={(e) => setSelectedChart(e.target.value)}
//                     style={{
//                       padding: '8px',
//                       borderRadius: '6px',
//                       border: '1px solid #ccc',
//                       fontSize: '16px',
//                       width: "200px"
//                     }}
//                   >
//                     <option value="line">Line Graph</option>
//                     <option value="bar">Bar Graph</option>
//                     <option value="pie">Pie Graph</option>
//                   </select> */}
//                 </div>
//               </div> <div style={{ display: 'flex', marginBottom: '10px', gap: "10px" }}>
//                 <Form.Group className="mb-3" style={{ width: "50%" }}>
//                   <Form.Label><b>{enableComparison ? "Graph Name 1" : "Graph Name"}</b></Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter Graph Name"
//                     className="custom-input"
//                     required
//                     style={{
//                       border: "2px solid #929292",
//                     }}

//                   />
//                 </Form.Group>

//                 {/* {enableComparison && (
//               <Form.Group className="mb-3" style={{ width: "50%" }}>
//                 <Form.Label><b>Graph Name 2 </b></Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={name2}
//                   onChange={(e) => setName2(e.target.value)}
//                   placeholder="Enter Graph Name 2"
//                   className="custom-input"

//                 />
//               </Form.Group>
//             )} */}
//               </div> <Form.Group className="mb-4" style={{ marginBottom: '10px', width: "100%" }} >
//                 <Form.Label><b>Description</b></Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Enter description"
//                   required
//                   style={{
//                     border: "2px solid #929292",
//                     borderRadius: "7px",
//                     height: "40px",
//                     padding: "10px",
//                     marginTop: "10px",
//                     fontSize: "16px",
//                     width: "98%"
//                   }}
//                 />
//               </Form.Group><div style={{ display: 'flex', gap: "10px", marginBottom: '10px' }}>
//                 <Form.Group className="mb-3" style={{ width: "50%" }}>
//                   <Form.Label><b>Project Start Date</b></Form.Label>
//                   <DatePicker
//                     selected={projectStartDate}
//                     onChange={(date) => setProjectStartDate(date)}
//                     dateFormat="MMMM d, yyyy"
//                     placeholderText="Select Start Date"
//                     className="custom-input"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" style={{ width: "50%" }}>
//                   <Form.Label><b>Project End Date</b></Form.Label>
//                   <DatePicker
//                     selected={projectEndDate}
//                     onChange={(date) => setProjectEndDate(date)}
//                     dateFormat="MMMM d, yyyy"
//                     placeholderText="Select End Date"
//                     className="custom-input"
//                     required
//                   />
//                 </Form.Group>
//               </div>

//               <Form.Group className="mb-4" style={{ marginBottom: '10px' }} >
//                 <Form.Label><b>Project Summary</b></Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={projectSummary}
//                   onChange={(e) => setProjectSummary(e.target.value)}
//                   placeholder="Enter project summary"
//                   required
//                   style={{
//                     border: "2px solid #929292",
//                     borderRadius: "7px",
//                     height: "40px",
//                     padding: "10px",
//                     marginTop: "10px",
//                     fontSize: "16px",
//                     width: "98%"
//                   }}
//                 />
//               </Form.Group></>) :
//               <div>

//               </div>
//             }








//             {/* {inputs.map((input, index) => (
//             <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
//               <Form.Control
//                 type="text"
//                 name="label"
//                 placeholder={`Label ${index + 1}`}
//                 value={input.label}
//                 onChange={(e) => handleInputChange(index, e)}
//                 style={{
//                   border: '2px solid #929292',
//                   width: '100%',
//                   borderRadius: '7px',
//                   height: '40px',
//                   padding: '10px',
//                   marginTop: '10px'
//                 }}
//               />
//               <Form.Control
//                 type="number"
//                 name="value"
//                 placeholder={`Value1 - ${index + 1}`}
//                 value={input.value}
//                 onChange={(e) => handleInputChange(index, e)}
//                 style={{
//                   border: '2px solid #929292',
//                   width: '100%',
//                   borderRadius: '7px',
//                   height: '40px',
//                   padding: '10px',
//                   marginTop: '10px'
//                 }}
//               />
//               {enableComparison && (
//                 <Form.Control
//                   type="number"
//                   name="value2"
//                   placeholder={`Value2 - ${index + 1}`}
//                   value={input.value2}
//                   onChange={(e) => handleInputChange(index, e)}
//                   style={{
//                     border: '2px solid #929292',
//                     width: '100%',
//                     borderRadius: '7px',
//                     height: '40px',
//                     padding: '10px',
//                     marginTop: '10px'
//                   }}
//                 />
//               )}
//               <div style={{ marginTop: "10px" }}>
//                 <Button
//                   style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
//                   onClick={() => deleteInputField(index)}
//                   disabled={index === 0}
//                 >
//                   Delete Field
//                 </Button>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <Button style={{ backgroundColor: "black", color: "white" }} onClick={addInputField}>
//                   Add Field
//                 </Button>
//               </div>
//             </div>
//           ))} */}
//             {!form &&
//               <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <Button type='submit' style={{
//                   height: 60,
//                   color: 'white',
//                   width: '25%',
//                   borderRadius: 5,
//                   fontSize: 20,
//                   fontWeight: 500,
//                   backgroundColor: 'black',
//                   borderColor: 'transparent',
//                   marginTop: '20px',
//                 }}
//                 >
//                   Next
//                 </Button>
//               </div>}





//             {/* {!form ?

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <Button style={{
//                 height: 60,
//                 color: 'white',
//                 width: '25%',
//                 borderRadius: 5,
//                 fontSize: 20,
//                 fontWeight: 500,
//                 backgroundColor: 'black',
//                 borderColor: 'transparent',
//                 marginTop: '20px',
//               }}
//                 onClick={() => setForm(true)}>
//                 Next
//               </Button>
//             </div>
//             :
//             <div >
//               <div style={{ display: 'flex', justifyContent: 'center' }}>


                
              

//                 <Button
//                   onClick={() => setIsModalOpen(true)}
//                   style={{
//                     height: 60,
//                     color: 'white',
//                     width: '25%',
//                     borderRadius: 5,
//                     fontSize: 20,
//                     fontWeight: 500,
//                     backgroundColor: 'black',
//                     borderColor: 'transparent',
//                     marginTop: '20px',
//                     marginLeft: "10px"
//                   }}
//                 >
//                   Add Forms
//                 </Button>
//               </div>

//               <div style={{
//                 display: "flex",
//                 justifyContent: "center"
//               }}>
//                 <Button type='submit' style={{
//                   height: 60,
//                   color: 'white',
//                   width: '25%',
//                   borderRadius: 5,
//                   fontSize: 20,
//                   fontWeight: 500,
//                   backgroundColor: 'black',
//                   borderColor: 'transparent',
//                   marginTop: '20px',

//                 }}>
//                   Finish
//                 </Button>
//               </div>

//             </div>



//           } */}



//           </Form>
//           {form &&
//             <Form onSubmit={handleSubmit}>

//               <div style={{ display: 'flex', justifyContent: 'center' }}>



//                 <Button
//                   style={{
//                     height: 60,
//                     color: 'white',
//                     width: '25%',
//                     borderRadius: 5,
//                     fontSize: 20,
//                     fontWeight: 500,
//                     backgroundColor: 'black',
//                     borderColor: 'transparent',
//                     marginTop: '20px',
//                     marginLeft: "10px"
//                   }}
//                   onClick={() => setForm(false)}
//                 >
//                   Back
//                 </Button>

//                 <Button
//                   onClick={() => setIsModalOpen(true)}
//                   style={{
//                     height: 60,
//                     color: 'white',
//                     width: '25%',
//                     borderRadius: 5,
//                     fontSize: 20,
//                     fontWeight: 500,
//                     backgroundColor: 'black',
//                     borderColor: 'transparent',
//                     marginTop: '20px',
//                     marginLeft: "10px"
//                   }}
//                 >
//                   Add Forms
//                 </Button>
//               </div>

//               {planVsActualAdded &&
//                 <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>

//                   <div style={{ display: "flex", justifyContent: "space-between" }}>

//                     <h5><b>Plan VS Actual Form</b></h5>

//                     <h5 onClick={() => { setPlanVsActualAdded(false); setPlanInputs([{ planLabel: '', planValue: '', planValue2: '' }]) }}
//                       style={{ cursor: "pointer", color: "red" }}>
//                       <b>close</b>
//                     </h5>
//                   </div>

//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Form.Group className="mb-3" style={{ width: "50%" }}>
//                       <Form.Label><b>{enableComparison ? "Graph Name 1" : "Graph Name"}</b></Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={planname}
//                         onChange={(e) => setPlanName(e.target.value)}
//                         placeholder="Enter Graph Name"
//                         className="custom-input"
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" style={{ width: "50%" }}>
//                       <Form.Label><b>Graph Name 2 </b></Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={planname2}
//                         onChange={(e) => setPlanName2(e.target.value)}
//                         placeholder="Enter Graph Name 2"
//                         className="custom-input"
//                         required
//                       />
//                     </Form.Group>
//                   </div>

//                   {planinputs.map((input, index) => (
//                     <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
//                       <Form.Control
//                         type="text"
//                         name="planLabel"
//                         placeholder={`Label ${index + 1}`}
//                         value={input.planLabel}
//                         onChange={(e) => handlePlanInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required
//                       />
//                       <Form.Control
//                         type="number"
//                         name="planValue"
//                         placeholder={`Value1 - ${index + 1}`}
//                         value={input.planValue}
//                         onChange={(e) => handlePlanInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required
//                       />

//                       <Form.Control
//                         type="number"
//                         name="planValue2"
//                         placeholder={`Value2 - ${index + 1}`}
//                         value={input.planValue2}
//                         onChange={(e) => handlePlanInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required
//                       />

//                       <div style={{ marginTop: "10px" }}>
//                         <Button
//                           style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
//                           onClick={() => deletePlanInputField(index)}
//                           disabled={index === 0}
//                         >
//                           Delete Field
//                         </Button>
//                       </div>
//                       <div style={{ marginTop: "10px" }}>
//                         <Button style={{ backgroundColor: "black", color: "white" }} onClick={addPlanInputField}>
//                           Add Field
//                         </Button>
//                       </div>
//                     </div>
//                   ))}

//                 </div>
//               }

//               {budget &&

//                 <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>

//                   <div style={{ display: "flex", justifyContent: "space-between" }}>

//                     <h5><b>Budget</b></h5>
//                     <h5 onClick={() => { setBudget(false); setBudgetInputs([{ budgetLabel: '', budgetValue: '' }]) }} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>
//                   </div>

//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Form.Group className="mb-3" style={{ width: "50%" }}>
//                       <Form.Label><b>Graph Name</b></Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={budgetName}
//                         onChange={(e) => setBudgetName(e.target.value)}
//                         placeholder="Enter name"
//                         className="custom-input"
//                         required

//                       />
//                     </Form.Group>
//                   </div>

//                   {budgetInputs.map((input, index) => (
//                     <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
//                       <Form.Control
//                         type="text"
//                         name="budgetLabel"
//                         placeholder={`Label ${index + 1}`}
//                         value={input.budgetLabel}
//                         onChange={(e) => handleBudgetInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required
//                       />
//                       <Form.Control
//                         type="number"
//                         name="budgetValue"
//                         placeholder={`Value - ${index + 1}`}
//                         value={input.budgetValue}
//                         onChange={(e) => handleBudgetInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'

//                         }}
//                         required

//                       />

//                       <div style={{ marginTop: "10px" }}>
//                         <Button
//                           style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
//                           onClick={() => deleteBudgetInputField(index)}
//                           disabled={index === 0}
//                         >
//                           Delete Field
//                         </Button>
//                       </div>
//                       <div style={{ marginTop: "10px" }}>
//                         <Button style={{ backgroundColor: "black", color: "white" }} onClick={addBudgetInputField}>
//                           Add Field
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               }

//               {earned &&
//                 <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>

//                   <div style={{ display: "flex", justifyContent: "space-between" }}>

//                     <h5><b>Earned</b></h5>
//                     <h5 onClick={() => { setEarned(false); setEarnedInputs([{ earnedLabel: '', earnedValue: '' }]) }}
//                       style={{ cursor: "pointer", color: "red" }}>
//                       <b>close</b>
//                     </h5>
//                   </div>

//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Form.Group className="mb-3" style={{ width: "50%" }}>
//                       <Form.Label><b>{enableComparison ? "Graph Name 1" : "Graph Name"}</b></Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={earnedName}
//                         onChange={(e) => setEarnedName(e.target.value)}
//                         placeholder="Enter name"
//                         className="custom-input"
//                         required

//                       />
//                     </Form.Group>
//                   </div>

//                   {earnedInputs.map((input, index) => (
//                     <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
//                       <Form.Control
//                         type="text"
//                         name="earnedLabel"
//                         placeholder={`Label ${index + 1}`}
//                         value={input.earnedLabel}
//                         onChange={(e) => handleEarnedInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required

//                       />
//                       <Form.Control
//                         type="number"
//                         name="earnedValue"
//                         placeholder={`Value - ${index + 1}`}
//                         value={input.earnedValue}
//                         onChange={(e) => handleEarnedInputChange(index, e)}
//                         style={{
//                           border: '2px solid #929292',
//                           width: '100%',
//                           borderRadius: '7px',
//                           height: '40px',
//                           padding: '10px',
//                           marginTop: '10px'
//                         }}
//                         required
//                       />
//                       <div style={{ marginTop: "10px" }}>
//                         <Button
//                           style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
//                           onClick={() => deleteEarnedInputField(index)}
//                           disabled={index === 0}
//                         >
//                           Delete Field
//                         </Button>
//                       </div>
//                       <div style={{ marginTop: "10px" }}>
//                         <Button style={{ backgroundColor: "black", color: "white" }} onClick={addEarnedInputField}>
//                           Add Field
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               }
//               {spi &&
//                 <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
//                   <div style={{ display: "flex", justifyContent: "space-between" }}>

//                     <h5><b>SPI</b></h5>
//                     <h5 onClick={() => { setSPI(false); setSPIValue("") }} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>
//                   </div>

//                   <Form.Control
//                     type="number"
//                     min={-1}
//                     max={1}
//                     step="0.01"
//                     value={spiValue}
//                     onChange={(e) => setSPIValue(e.target.value)}
//                     placeholder="Enter SPI (-1 to 1)"
//                     style={{ width: '200px', border: '2px solid #929292', borderRadius: '7px', padding: '10px', }}
//                     required
//                   />
//                 </div>

//               }

//               {cpi &&



//                 <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>

//                   <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <h5><b>CPI</b></h5>
//                     <h5 onClick={() => { setCPI(false); setCPIValue("") }} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>

//                   </div>

//                   <Form.Control
//                     type="number"
//                     min={-1}
//                     max={1}
//                     step="0.01"
//                     value={cpiValue}
//                     onChange={(e) => setCPIValue(e.target.value)}
//                     placeholder="Enter CPI (-1 to 1)"
//                     style={{ width: '200px', border: '2px solid #929292', borderRadius: '7px', padding: '10px' }}
//                     required
//                   />
//                 </div>

//               }


//               {(planVsActualAdded || budget || earned || spi || cpi) && <div style={{ display: 'flex', justifyContent: 'center' }}>





//                 <Button
//                   style={{
//                     height: 60,
//                     color: 'white',
//                     width: '25%',
//                     borderRadius: 5,
//                     fontSize: 20,
//                     fontWeight: 500,
//                     backgroundColor: 'black',
//                     borderColor: 'transparent',
//                     marginTop: '20px',
//                     marginLeft: "10px"
//                   }}
//                   type='submit'
//                 >
//                   Generate
//                 </Button>
//               </div>}




//             </Form>
//           }
//         </>
//       ) : (
//         <div className="container p-4">
//           {/* <div style={{ marginBottom: '20px' }}>
//               {enableComparison ? <p><b>Graph Name 1:</b> {name}</p> : <p><b>Graph Name:</b> {name}</p>}
//               {enableComparison && (<p><b>Graph Name 2:</b> {name2}</p>)}
//               <p><b>Description:</b> {description}</p>
//               <p><b>Project Summary:</b> {projectSummary}</p>
//               <p><b>Project Start Date:</b> {projectStartDate?.toLocaleDateString() || 'N/A'}</p>
//               <p><b>Project End Date:</b> {projectEndDate?.toLocaleDateString() || 'N/A'}</p>
//             </div> */}

//           <div className="row g-4" >


//             <div className="col-md-6">
//               <div className="p-3" style={{
//                 background: 'linear-gradient(to left, #0728e6, #010d57)',
//                 borderRadius: "15px",
//                 boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
//                 color: "white"
//               }}>
//                 {/* <h5 className="mb-3">Statistics</h5> */}
//                 <ResponsiveContainer width="100%" height={350}>
//                   <div style={{ marginBottom: '20px' }}>
//                     {enableComparison ? <p><b>Graph Name 1:</b> {name}</p> : <p><b>Graph Name:</b> {name}</p>}
//                     {enableComparison && (<p><b>Graph Name 2:</b> {name2}</p>)}
//                     <p><b>Description:</b> {description}</p>
//                     <p><b>Project Summary:</b> {projectSummary}</p>
//                     <p><b>Project Start Date:</b> {projectStartDate?.toLocaleDateString() || 'N/A'}</p>
//                     <p><b>Project End Date:</b> {projectEndDate?.toLocaleDateString() || 'N/A'}</p>
//                   </div>
//                 </ResponsiveContainer>
//                 <div style={{ marginBottom: '20px' }}>
//                   {/* <select
//                     value={selectedChart}
//                     onChange={(e) => setSelectedChart(e.target.value)}
//                     style={{
//                       padding: '8px',
//                       borderRadius: '6px',
//                       border: '1px solid #ccc',
//                       fontSize: '16px',
//                       width: "200px"

//                     }}
//                   >
//                     <option value="line">Line Graph</option>
//                     <option value="bar">Bar Graph</option>
//                     <option value="pie">Pie Graph</option>
//                   </select> */}
//                 </div>
//               </div>

//             </div>



//             {/* {showChart && showNormalGraph && <div style={{ position: 'relative' }}>
//             <button
//               onClick={handleClose}
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 background: 'transparent',
//                 border: 'none',
//                 fontSize: '35px',
//                 cursor: 'pointer',
//                 color: "red"
//               }}
//             >
//               ×
//             </button><div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
//               {selectedChart === 'line' && <Line data={chartData} options={options} />}
//             </div>
//             <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>

//               {selectedChart === 'bar' && <Bar data={chartData} options={options} />}
//             </div>

//             <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>

//               {selectedChart === 'pie' && <Pie data={chartData} options={options} />}
//             </div>
//           </div>
//           } */}



//             {showChart && (
//               <>


//                 {planChartData && showPlanGraph && (


//                   <div className="col-md-6">

//                     <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>

//                       <div style={{ marginBottom: '40px' }}>
//                         <div className="p-3 bg-white" style={{
//                           borderRadius: "15px",
//                           boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
//                           height: "100%"
//                         }}>
//                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
//                             <div>
//                               <h4>Plan vs Actual</h4>
//                             </div>

//                             <div onClick={() => setPlanMenuOpen(!planMenuOpen)} style={{ position: "relative" }}>
//                             <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>

//                               <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
//                               </div>

//                               <div className="" style={{
//                                 display: planMenuOpen ? "block" : "none",
//                                 position: "absolute",
//                                 top: "100%",
//                                 right: 0,
//                                 background: "#fff",
//                                 border: "1px solid #ccc",
//                                 boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                                 zIndex: 100,
//                                 padding: 8
//                               }}>
//                                 <div onClick={() => handleEdit("planActive")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
//                                 <div onClick={handlePlanClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
//                                 {/* <div style={{ cursor: "pointer", fontSize: "14px", }}>ChangeType</div> */}
//                                 <div style={{ marginLeft: '-4px' }}>
//                                   <select
//                                     value={selectedPlanChart}
//                                     onChange={(e) => setSelectedPlanChart(e.target.value)}
//                                     style={{
//                                       // padding: 'px',
//                                       // borderRadius: '6px',
//                                       border: 'none',
//                                       fontSize: '14px',
//                                       // width: "210px",
//                                       background: "none",

//                                     }}
//                                   >
//                                     <option value="line">Line Graph</option>
//                                     <option value="bar">Bar Graph</option>
//                                     <option value="pie">Pie Graph</option>
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>

//                           </div>

//                           {planChartData && selectedPlanChart === 'line' &&
//                             // <Line data={planChartData} options={options} />

//                             <div>
//                               <p><>Line Chart</></p>
//                               <ResponsiveContainer width="100%" height={300}>

//                                 <AreaChart data={planinputs} style={{ width: "100%" }}>
//                                   <defs style={{ width: "100%" }}>
//                                     <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
//                                     </linearGradient>
//                                     <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="pink" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="pink" stopOpacity={0} />
//                                     </linearGradient>
//                                   </defs>
//                                   <Area dataKey="planValue" fill="url(#area-gradient)" />
//                                   <Area dataKey="planValue2" fill="url(#area-gradient)" />

//                                   <CartesianGrid stroke="#f5f5f5" />
//                                   <XAxis dataKey="planLabel" />
//                                   <YAxis />
//                                 </AreaChart>
//                               </ResponsiveContainer>
//                             </div>


//                           }
//                           {planChartData && selectedPlanChart === 'bar' &&
//                             // <Bar data={planChartData} options={options} />

//                             <div>
//                               <p><>Bar Chart</></p>
//                               <ResponsiveContainer width="100%" height={300} >
//                                 <BarChart data={planinputs} style={{ width: "100%" }}>
//                                   <defs>
//                                     <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
//                                     </linearGradient>
//                                   </defs>
//                                   <XAxis dataKey="planLabel" />
//                                   <YAxis />
//                                   <Tooltip />
//                                   <Bar dataKey="planValue" fill="url(#bar-gradient)" barSize={15} radius={[10, 10, 0, 0]} />
//                                   <Bar dataKey="planValue2" fill="url(#bar-gradient)" barSize={15} radius={[10, 10, 0, 0]} />

//                                 </BarChart>
//                               </ResponsiveContainer>
//                             </div>
//                           }
//                           {planChartData && selectedPlanChart === 'pie' &&
//                             // <Pie data={planChartData} options={options}/>
//                             <div>
//                               <p><>Pie Chart</></p>
//                               <ResponsiveContainer width="100%" height={300}>
//                                 <PieChart>
//                                   <defs>
//                                     <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//                                       <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
//                                     </filter>
//                                   </defs>

//                                   <Pie
//                                     data={sanitizedPlanInputs}
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={70}
//                                     outerRadius={120}
//                                     fill="#3A53F3"
//                                     dataKey="planValue"
//                                     label
//                                     filter="url(#shadow)"
//                                   >
//                                     <Pie
//                                       data={sanitizedPlanInputs}
//                                       cx="50%"
//                                       cy="50%"
//                                       innerRadius={70}
//                                       outerRadius={120}
//                                       fill="#3A53F3"
//                                       dataKey="planValue2"
//                                       label
//                                       filter="url(#shadow)"
//                                     ></Pie>
//                                     {sanitizedPlanInputs.map((entry, index) => (
//                                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                   </Pie>
//                                   <Tooltip />
//                                 </PieChart>
//                               </ResponsiveContainer>
//                             </div>
//                           }
//                         </div>
//                       </div>


//                     </div>

//                   </div>


//                 )}




//                 {/* <div style={{ display: "flex", marginTop: "50px", justifyContent: "space-between" }}> */}
//                 {budgetChartData && showBudgerGraph && (


//                   <div className="col-md-6">


//                     <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
//                       <div style={{ marginBottom: '40px' }}>
//                         <div className="p-3 bg-white" style={{
//                           borderRadius: "15px",
//                           boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
//                           height: "100%"
//                         }}>
//                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                             <div>
//                               <h4>Budget</h4>
//                             </div>


//                             <div onClick={() => setBudgetMenuOpen(!budgetMenuOpen)} style={{ position: "relative" }}>
//                             <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>

//                               <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
//                               </div>

//                               <div className="" style={{
//                                 display: budgetMenuOpen ? "block" : "none",
//                                 position: "absolute",
//                                 top: "100%",
//                                 right: 0,
//                                 background: "#fff",
//                                 border: "1px solid #ccc",
//                                 boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                                 zIndex: 100,
//                                 padding: 8
//                               }}>
//                                 <div onClick={() => handleEdit("budget")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
//                                 <div onClick={handleBudgetClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
//                                 {/* <div style={{ cursor: "pointer", fontSize: "14px" }}>ChangeType</div> */}
//                                 <div style={{ marginLeft: '-4px' }}>
//                                   <select
//                                     value={selectedBudgetChart}
//                                     onChange={(e) => setSelectedBudgetChart(e.target.value)}
//                                     style={{
//                                       // padding: 'px',
//                                       // borderRadius: '6px',
//                                       border: 'none',
//                                       fontSize: '14px',
//                                       // width: "210px",
//                                       background: "none",

//                                     }}
//                                   >
//                                     <option value="line">Line Graph</option>
//                                     <option value="bar">Bar Graph</option>
//                                     <option value="pie">Pie Graph</option>
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {selectedBudgetChart === 'line' &&
//                             //  <Line data={budgetChartData} options={options}/> 

//                             <div>
//                               <p><>Line Chart</></p>

//                               <ResponsiveContainer width="100%" height={300}>
//                                 <AreaChart data={budgetInputs} style={{ width: "100%" }}>
//                                   <defs style={{ width: "100%" }}>
//                                     <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
//                                     </linearGradient>
//                                   </defs>
//                                   <Area dataKey="budgetValue" fill="url(#area-gradient)" />
//                                   <CartesianGrid stroke="#f5f5f5" />
//                                   <XAxis dataKey="budgetLabel" />
//                                   <YAxis />
//                                 </AreaChart>
//                               </ResponsiveContainer>
//                             </div>

//                           }

//                           {selectedBudgetChart === 'bar' &&
//                             // <Bar data={budgetChartData} options={options} />
//                             <div>
//                               <p><>Bar Chart</></p>
//                               <ResponsiveContainer width="100%" height={300} >
//                                 <BarChart data={budgetInputs} style={{ width: "100%" }}>
//                                   <defs>
//                                     <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
//                                     </linearGradient>
//                                   </defs>
//                                   <XAxis dataKey="budgetLabel" />
//                                   <YAxis />
//                                   <Tooltip />
//                                   <Bar dataKey="budgetValue" fill="url(#bar-gradient)" barSize={10} radius={[10, 10, 0, 0]} />
//                                 </BarChart>
//                               </ResponsiveContainer>
//                             </div>

//                           }


//                           {selectedBudgetChart === 'pie' &&
//                             // <Pie data={budgetChartData} options={options} />

//                             <div>
//                               <p><>Pie Chart</></p>
//                               <ResponsiveContainer width="100%" height={300}>
//                                 <PieChart>
//                                   <defs>
//                                     <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//                                       <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
//                                     </filter>
//                                   </defs>

//                                   <Pie
//                                     data={sanitizedBudgetInputs}
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={70}
//                                     outerRadius={120}
//                                     fill="#3A53F3"
//                                     dataKey="budgetValue"
//                                     label
//                                     filter="url(#shadow)"
//                                   >
//                                     {sanitizedBudgetInputs.map((entry, index) => (
//                                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                   </Pie>
//                                   <Tooltip />
//                                 </PieChart>
//                               </ResponsiveContainer>
//                             </div>

//                           }
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                 )}



//                 {earnedChartData && showEarnedGraph && (

//                   <div className="col-md-6">

//                     <div style={{ marginBottom: '40px' }}>
//                       <div className="p-3 bg-white" style={{
//                         borderRadius: "15px",
//                         boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
//                         height: "100%"
//                       }}>

//                         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                           <div>
//                             <h4>Earned</h4>
//                           </div>
//                           {/* <div>

//                             <Button
//                               onClick={() => handleEdit("earned")}
//                               style={{
//                                 top: 0,
//                                 right: 0,
//                                 cursor: 'pointer',

//                                 fontSize: '15px',


//                               }}
//                             >Edit
//                             </Button>
//                             <button
//                               onClick={handleEarnedClose}
//                               style={{
//                                 top: 0,
//                                 right: 0,
//                                 background: 'transparent',
//                                 border: 'none',
//                                 fontSize: '35px',
//                                 cursor: 'pointer',
//                               }}
//                             >
//                               ×
//                             </button>
//                           </div> */}

//                           < div onClick={() => setEarnedMenuOpen(!earnedMenuOpen)} style={{ position: "relative" }}>
//                             <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
//                               <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />

//                             </div>

//                             <div className="" style={{
//                               display: earnedMenuOpen ? "block" : "none",
//                               position: "absolute",
//                               top: "100%",
//                               right: 0,
//                               background: "#fff",
//                               border: "1px solid #ccc",
//                               boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                               zIndex: 100,
//                               padding: 8
//                             }}>
//                               <div onClick={() => handleEdit("earned")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
//                               <div onClick={handleEarnedClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
//                               {/* <div style={{ cursor: "pointer", fontSize: "14px" }}>ChangeType</div> */}
//                               <div style={{ marginLeft: '-4px' }}>
//                                 <select
//                                   value={selectedEarnedChart}
//                                   onChange={(e) => setSelectedEarnedChart(e.target.value)}
//                                   style={{
//                                     // padding: 'px',
//                                     // borderRadius: '6px',
//                                     border: 'none',
//                                     fontSize: '14px',
//                                     // width: "210px",
//                                     background: "none",

//                                   }}
//                                 >
//                                   <option value="line">Line Graph</option>
//                                   <option value="bar">Bar Graph</option>
//                                   <option value="pie">Pie Graph</option>
//                                 </select>
//                               </div>
//                             </div>
//                           </div>

//                         </div>

//                         {selectedEarnedChart === 'line' && (
//                           <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
//                             {/* <Line data={earnedChartData} options={options} /> */}

//                             <div>
//                               <p><>Line Chart</></p>
//                               <ResponsiveContainer width="100%" height={300}>
//                                 <AreaChart data={earnedInputs} style={{ width: "100%" }}>
//                                   <defs style={{ width: "100%" }}>
//                                     <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
//                                     </linearGradient>
//                                   </defs>
//                                   <Area dataKey="earnedValue" fill="url(#area-gradient)" />
//                                   <CartesianGrid stroke="#f5f5f5" />
//                                   <XAxis dataKey="earnedLabel" />
//                                   <YAxis />
//                                 </AreaChart>
//                               </ResponsiveContainer>
//                             </div>
//                           </div>
//                         )}

//                         {selectedEarnedChart === 'bar' && (
//                           <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
//                             {/* <Bar data={earnedChartData} options={options} /> */}

//                             <div>
//                               <p><>Bar Chart</></p>
//                               <ResponsiveContainer width="100%" height={300} >
//                                 <BarChart data={earnedInputs} style={{ width: "100%" }}>
//                                   <defs>
//                                     <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
//                                       <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
//                                       <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
//                                     </linearGradient>
//                                   </defs>
//                                   <XAxis dataKey="earnedLabel" />
//                                   <YAxis />
//                                   <Tooltip />
//                                   <Bar dataKey="earnedValue" fill="url(#bar-gradient)" barSize={10} radius={[10, 10, 0, 0]} />
//                                 </BarChart>
//                               </ResponsiveContainer>
//                             </div>
//                           </div>
//                         )}

//                         {selectedEarnedChart === 'pie' && (
//                           <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
//                             {/* <Pie data={earnedChartData} options={options} /> */}

//                             <div>
//                               <p style={{ marginLeft: "-30px" }}><>Pie Chart</></p>

//                               <ResponsiveContainer width="100%" height={300}>
//                                 <PieChart>
//                                   <defs>
//                                     <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//                                       <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
//                                     </filter>
//                                   </defs>

//                                   <Pie
//                                     data={sanitizedEarnedInputs}
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={70}
//                                     outerRadius={120}
//                                     fill="#3A53F3"
//                                     dataKey="earnedValue"
//                                     label
//                                     filter="url(#shadow)"
//                                   >
//                                     {sanitizedEarnedInputs.map((entry, index) => (
//                                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                   </Pie>
//                                   <Tooltip />
//                                 </PieChart>
//                               </ResponsiveContainer>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                 )}




//                 {/* <div style={{ display: "flex", marginTop: "50px", justifyContent: "space-between" }}> */}

//                 {spiChartValue !== null && showSpiGraph && (
//                   <div className="col-md-6">

//                     <div style={{ marginBottom: '40px' }}>
//                       <div className="p-3 bg-white" style={{
//                         borderRadius: "15px",
//                         boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
//                         height: "100%"
//                       }}>
//                         <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>

//                           <div>
//                             <h4>SPI </h4>

//                           </div>

//                           < div onClick={() => setSpiMenuOpen(!spiMenuOpen)} style={{ position: "relative" }}>
//                           <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>

//                             <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
//                             </div>

//                             <div className="" style={{
//                               display: spiMenuOpen ? "block" : "none",
//                               position: "absolute",
//                               top: "100%",
//                               right: 0,
//                               background: "#fff",
//                               border: "1px solid #ccc",
//                               boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                               zIndex: 100,
//                               padding: 8
//                             }}>
//                               <div onClick={() => handleEdit("SPI")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
//                               <div onClick={handleSpiClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
//                             </div>
//                           </div>
//                         </div>

//                         <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', height: "300px", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center" }}>

//                           <ReactSpeedometer
//                             minValue={-1}
//                             maxValue={1}
//                             value={spiChartValue}
//                             segments={3}
//                             needleColor="steelblue"
//                             customSegmentStops={[-1, -0.4, 0.4, 1]}
//                             segmentColors={["darkgreen", "orange", "red"]}
//                             currentValueText="SPI: ${value}"
//                             height={350}
//                             width={400}
//                           />
//                         </div>

//                       </div>

//                     </div>
//                   </div>

//                 )}




//                 {cpiChartValue !== null && showCpiGraph && (
//                   <div className="col-md-6">

//                     <div style={{ marginBottom: '40px' }}>
//                       <div className="p-3 bg-white" style={{
//                         borderRadius: "15px",
//                         boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
//                         height: "100%"
//                       }}>


//                         <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>

//                           <div>
//                             <h4>CPI </h4>

//                           </div>

//                           < div onClick={() => setCpiMenuOpen(!cpidMenuOpen)} style={{ position: "relative" }} >
//                           <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>

//                             <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
//                             </div>

//                             <div className="" style={{
//                               display: cpidMenuOpen ? "block" : "none",
//                               position: "absolute",
//                               top: "100%",
//                               right: 0,
//                               background: "#fff",
//                               border: "1px solid #ccc",
//                               boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                               zIndex: 100,
//                               padding: 8
//                             }}>
//                               <div onClick={() => handleEdit("CPI")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
//                               <div onClick={handleCpiClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
//                             </div>
//                           </div>
//                         </div>

//                         <div style={{ width: '100%', maxWidth: '700px', height: "300px", margin: '0 auto', display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center" }}>

//                           <ReactSpeedometer
//                             minValue={-1}
//                             maxValue={1}
//                             value={cpiChartValue}
//                             segments={3}
//                             needleColor="steelblue"
//                             customSegmentStops={[-1, -0.4, 0.4, 1]}
//                             segmentColors={["darkgreen", "orange", "red"]}
//                             currentValueText="CPI: ${value}"
//                             height={350}
//                             width={400}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                 )}
//               </>
//             )}
//           </div>




//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             {/* <Button onClick={() => setShowChart(false)} style={{ */}
//             <Button onClick={() => window.location.reload()} style={{

//               height: 60,
//               color: 'white',
//               width: '25%',
//               borderRadius: 5,
//               fontSize: 20,
//               fontWeight: 500,
//               backgroundColor: 'black',
//               borderColor: 'transparent',
//               marginTop: '20px'
//             }}>
//               Refresh
//             </Button>
//           </div>
//         </div>
//       )
//       }

//       {
//         isModalOpen && (
//           <div
//             onClick={() => setIsModalOpen(false)}
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               height: '100vh',
//               width: '100vw',
//               backgroundColor: 'rgba(0,0,0,0.5)',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               zIndex: 1000,
//             }}
//           >
//             <div
//               style={{
//                 background: 'white',
//                 padding: '30px',
//                 borderRadius: '10px',
//                 width: '500px',
//                 maxHeight: '80vh',
//                 overflowY: 'auto',
//                 boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Button
//                 variant="secondary"
//                 style={{ padding: "10px", margin: "10px" }}
//                 onClick={() => handleFormSelection('planVsActual')}
//                 disabled={planVsActualAdded}
//               >
//                 Plan VS Actual
//               </Button>
//               <Button variant="secondary"
//                 style={{ padding: "10px", margin: "10px" }}
//                 onClick={() => handleFormSelection('Budget')}
//                 disabled={budget}> Budget</Button>

//               <Button variant="secondary"
//                 style={{ padding: "10px", margin: "10px" }}
//                 onClick={() => handleFormSelection('Earned')}
//                 disabled={earned}> Earned</Button>

//               <Button variant="secondary"
//                 style={{ padding: "10px", margin: "10px" }}
//                 onClick={() => handleFormSelection('SPI')}
//                 disabled={spi}> SPI</Button>

//               <Button variant="secondary"
//                 style={{ padding: "10px", margin: "10px" }}
//                 onClick={() => handleFormSelection('CPI')}
//                 disabled={cpi}> CPI</Button>


//               <div style={{ textAlign: 'right' }}>
//                 <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Close</Button>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </div >
//   );
// };


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import {
  BarChart, Bar, LineChart, Pie, PieChart, Cell, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid
} from "recharts";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.css";
import ReactSpeedometer from "react-d3-speedometer";

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement, CategoryScale, LinearScale);

const staticPlanData = [
  { planLabel: 'Jan', planValue: 10, planValue2: 8 },
  { planLabel: 'Feb', planValue: 20, planValue2: 18 },
  { planLabel: 'Mar', planValue: 30, planValue2: 25 },
  { planLabel: 'Apr', planValue: 40, planValue2: 35 },
  { planLabel: 'May', planValue: 50, planValue2: 45 }
];

const staticBudgetData = [
  { budgetLabel: 'Jan', budgetValue: 10000 },
  { budgetLabel: 'Feb', budgetValue: 15000 },
  { budgetLabel: 'Mar', budgetValue: 20000 },
  { budgetLabel: 'Apr', budgetValue: 25000 },
  { budgetLabel: 'May', budgetValue: 30000 }
];

const staticEarnedData = [
  { earnedLabel: 'Jan', earnedValue: 8000 },
  { earnedLabel: 'Feb', earnedValue: 12000 },
  { earnedLabel: 'Mar', earnedValue: 18000 },
  { earnedLabel: 'Apr', earnedValue: 22000 },
  { earnedLabel: 'May', earnedValue: 28000 }
];

const staticSPIValue = 0.85;
const staticCPIValue = 0.92;

const staticProjectData = {
  name: 'Project Alpha',
  description: 'Development of new product features',
  projectSummary: 'This project aims to develop new features for our flagship product',
  projectStartDate: new Date(2023, 0, 1),
  projectEndDate: new Date(2023, 5, 30)
};

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  elements: {
    line: {
      tension: 0.3,
    },
    point: {
      radius: 8,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: true,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
    },
  },
};

export const AiManualMode = () => {
  const [name, setName] = useState(staticProjectData.name);
  const [description, setDescription] = useState(staticProjectData.description);
  const [projectStartDate, setProjectStartDate] = useState(staticProjectData.projectStartDate);
  const [projectEndDate, setProjectEndDate] = useState(staticProjectData.projectEndDate);
  const [projectSummary, setProjectSummary] = useState(staticProjectData.projectSummary);
  
  const [planname, setPlanName] = useState('Plan');
  const [planname2, setPlanName2] = useState('Actual');
  const [planinputs, setPlanInputs] = useState(staticPlanData);
  
  const [budgetName, setBudgetName] = useState('Budget');
  const [budgetInputs, setBudgetInputs] = useState(staticBudgetData);
  
  const [earnedName, setEarnedName] = useState('Earned');
  const [earnedInputs, setEarnedInputs] = useState(staticEarnedData);
  
  const [spiValue, setSPIValue] = useState(staticSPIValue.toString());
  const [cpiValue, setCPIValue] = useState(staticCPIValue.toString());

  const [selectedPlanChart, setSelectedPlanChart] = useState('line');
  const [selectedBudgetChart, setSelectedBudgetChart] = useState('line');
  const [selectedEarnedChart, setSelectedEarnedChart] = useState('line');
  const [showChart, setShowChart] = useState(true);
  
  const [planVsActualAdded, setPlanVsActualAdded] = useState(true);
  const [budget, setBudget] = useState(true);
  const [earned, setEarned] = useState(true);
  const [spi, setSPI] = useState(true);
  const [cpi, setCPI] = useState(true);
  const [form, setForm] = useState(true);
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planMenuOpen, setPlanMenuOpen] = useState(false);
  const [budgetMenuOpen, setBudgetMenuOpen] = useState(false);
  const [earnedMenuOpen, setEarnedMenuOpen] = useState(false);
  const [spiMenuOpen, setSpiMenuOpen] = useState(false);
  const [cpidMenuOpen, setCpiMenuOpen] = useState(false);
  
  const [showPlanGraph, setShowPlanGraph]= useState(true)
  const [showBudgetGraph, setShowBudgetGraph]= useState(true)
  const [showEarnedGraph, setShowEarnedGraph]= useState(true)
  const [showSPIGraph, setShowSPIGraph]= useState(true)
  const [showCPIGraph, setShowCPIGraph]= useState(true)

  


  const [planChartData, setPlanChartData] = useState({
    labels: staticPlanData.map(item => item.planLabel),
    datasets: [
      {
        label: 'Plan',
        data: staticPlanData.map(item => item.planValue),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Actual',
        data: staticPlanData.map(item => item.planValue2),
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
    ]
  });

  const [budgetChartData, setBudgetChartData] = useState({
    labels: staticBudgetData.map(item => item.budgetLabel),
    datasets: [
      {
        label: 'Budget',
        data: staticBudgetData.map(item => item.budgetValue),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  });

  const [earnedChartData, setEarnedChartData] = useState({
    labels: staticEarnedData.map(item => item.earnedLabel),
    datasets: [
      {
        label: 'Earned',
        data: staticEarnedData.map(item => item.earnedValue),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  });

  const [spiChartValue, setSPIChartValue] = useState(staticSPIValue);
  const [cpiChartValue, setCPIChartValue] = useState(staticCPIValue);


  const handlePlanInputChange = (index, e) => {
    const { name, value } = e.target;
    const newPlanInputs = [...planinputs];
    newPlanInputs[index][name] = value;
    setPlanInputs(newPlanInputs);
  };

  const handleBudgetInputChange = (index, e) => {
    const { name, value } = e.target;
    const newBudgetInputs = [...budgetInputs];
    newBudgetInputs[index][name] = value;
    setBudgetInputs(newBudgetInputs);
  };

  const handleEarnedInputChange = (index, e) => {
    const { name, value } = e.target;
    const newEarnedInputs = [...earnedInputs];
    newEarnedInputs[index][name] = value;
    setEarnedInputs(newEarnedInputs);
  };


  const addPlanInputField = () => {
    setPlanInputs([...planinputs, { planLabel: '', planValue: '', planValue2: '' }]);
  };

  const addBudgetInputField = () => {
    setBudgetInputs([...budgetInputs, { budgetLabel: '', budgetValue: '' }]);
  };

  const addEarnedInputField = () => {
    setEarnedInputs([...earnedInputs, { earnedLabel: '', earnedValue: '' }]);
  };

  const deletePlanInputField = (index) => {
    if (planinputs.length > 1) {
      const newInputs = [...planinputs];
      newInputs.splice(index, 1);
      setPlanInputs(newInputs);
    }
  };

  const deleteBudgetInputField = (index) => {
    if (budgetInputs.length > 1) {
      const newInputs = [...budgetInputs];
      newInputs.splice(index, 1);
      setBudgetInputs(newInputs);
    }
  };

  const deleteEarnedInputField = (index) => {
    if (earnedInputs.length > 1) {
      const newInputs = [...earnedInputs];
      newInputs.splice(index, 1);
      setEarnedInputs(newInputs);
    }
  };


  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const planLabels = planinputs.map(item => item.planLabel);
    const planData1 = planinputs.map(item => parseFloat(item.planValue) || 0);
    const planData2 = planinputs.map(item => parseFloat(item.planValue2) || 0);
    setPlanChartData({
      labels: planLabels,
      datasets: [
        {
          label: planname,
          data: planData1,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: planname2,
          data: planData2,
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }
      ]
    });


    const budgetLabels = budgetInputs.map(item => item.budgetLabel);
    const budgetData = budgetInputs.map(item => parseFloat(item.budgetValue) || 0);
    setBudgetChartData({
      labels: budgetLabels,
      datasets: [
        {
          label: budgetName,
          data: budgetData,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });


    const earnedLabels = earnedInputs.map(item => item.earnedLabel);
    const earnedData = earnedInputs.map(item => parseFloat(item.earnedValue) || 0);
    setEarnedChartData({
      labels: earnedLabels,
      datasets: [
        {
          label: earnedName,
          data: earnedData,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }
      ]
    });


    setSPIChartValue(parseFloat(spiValue) || 0);
    setCPIChartValue(parseFloat(cpiValue) || 0);

    setShowChart(true);
  };

 
  const handleFormSelection = (formType) => {
    if (formType === 'planVsActual') setPlanVsActualAdded(true);
    if (formType === 'Budget') setBudget(true);
    if (formType === 'Earned') setEarned(true);
    if (formType === 'SPI') setSPI(true);
    if (formType === 'CPI') setCPI(true);
    setIsModalOpen(false);
  };

  const handleEdit = (formType) => {
    setShowChart(false);
    setPlanVsActualAdded(formType === 'planActive');
    setBudget(formType === 'budget');
    setEarned(formType === 'earned');
    setSPI(formType === 'SPI');
    setCPI(formType === 'CPI');
  };

 
  const handlePlanClose = () => {
    setPlanVsActualAdded(false);
    setShowPlanGraph(false)
    setPlanInputs([{ planLabel: '', planValue: '', planValue2: '' }]);
  };

  const handleBudgetClose = () => {
    setBudget(false);
    setShowBudgetGraph(false)
    setBudgetInputs([{ budgetLabel: '', budgetValue: '' }]);
  };

  const handleEarnedClose = () => {
    setEarned(false);
    showEarnedGraph(false)
    setEarnedInputs([{ earnedLabel: '', earnedValue: '' }]);
  };

  const handleSpiClose = () => {
    setSPI(false);
    showSPIGraph(false)
    setSPIValue('0');
  };

  const handleCpiClose = () => {
    setCPI(false);
    showCPIGraph(false)
    setCPIValue('0');
  };

 
  const sanitizedPlanInputs = planinputs.map(input => ({
    label: input.planLabel,
    planValue: Number(input.planValue) || 0,
    planValue2: Number(input.planValue2) || 0,
  }));

  const sanitizedBudgetInputs = budgetInputs.map(input => ({
    label: input.budgetLabel,
    budgetValue: Number(input.budgetValue) || 0,
  }));

  const sanitizedEarnedInputs = earnedInputs.map(input => ({
    label: input.earnedLabel,
    earnedValue: Number(input.earnedValue) || 0,
  }));

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {!showChart ? (
        <>
          <Form onSubmit={handleInitialSubmit}>
            {!form ? (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ marginBottom: '15px' }}></div>
                </div>
                <div style={{ display: 'flex', marginBottom: '10px', gap: "10px" }}>
                  <Form.Group className="mb-3" style={{ width: "50%" }}>
                    <Form.Label><b>Graph Name</b></Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Graph Name"
                      className="custom-input"
                      required
                      style={{ border: "2px solid #929292" }}
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-4" style={{ marginBottom: '10px', width: "100%" }} >
                  <Form.Label><b>Description</b></Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    required
                    style={{
                      border: "2px solid #929292",
                      borderRadius: "7px",
                      height: "40px",
                      padding: "10px",
                      marginTop: "10px",
                      fontSize: "16px",
                      width: "98%"
                    }}
                  />
                </Form.Group>
                <div style={{ display: 'flex', gap: "10px", marginBottom: '10px' }}>
                  <Form.Group className="mb-3" style={{ width: "50%" }}>
                    <Form.Label><b>Project Start Date</b></Form.Label>
                    <DatePicker
                      selected={projectStartDate}
                      onChange={(date) => setProjectStartDate(date)}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Select Start Date"
                      className="custom-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" style={{ width: "50%" }}>
                    <Form.Label><b>Project End Date</b></Form.Label>
                    <DatePicker
                      selected={projectEndDate}
                      onChange={(date) => setProjectEndDate(date)}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Select End Date"
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                </div>

                <Form.Group className="mb-4" style={{ marginBottom: '10px' }} >
                  <Form.Label><b>Project Summary</b></Form.Label>
                  <Form.Control
                    type="text"
                    value={projectSummary}
                    onChange={(e) => setProjectSummary(e.target.value)}
                    placeholder="Enter project summary"
                    required
                    style={{
                      border: "2px solid #929292",
                      borderRadius: "7px",
                      height: "40px",
                      padding: "10px",
                      marginTop: "10px",
                      fontSize: "16px",
                      width: "98%"
                    }}
                  />
                </Form.Group>
              </>
            ) : <div></div>}

            {!form &&
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type='submit' style={{
                  height: 60,
                  color: 'white',
                  width: '25%',
                  borderRadius: 5,
                  fontSize: 20,
                  fontWeight: 500,
                  backgroundColor: 'black',
                  borderColor: 'transparent',
                  marginTop: '20px',
                }}>
                  Next
                </Button>
              </div>}
          </Form>
          {form &&
            <Form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  style={{
                    height: 60,
                    color: 'white',
                    width: '25%',
                    borderRadius: 5,
                    fontSize: 20,
                    fontWeight: 500,
                    backgroundColor: 'black',
                    borderColor: 'transparent',
                    marginTop: '20px',
                    marginLeft: "10px"
                  }}
                  onClick={() => setForm(false)}
                >
                  Back
                </Button>

                <Button
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    height: 60,
                    color: 'white',
                    width: '25%',
                    borderRadius: 5,
                    fontSize: 20,
                    fontWeight: 500,
                    backgroundColor: 'black',
                    borderColor: 'transparent',
                    marginTop: '20px',
                    marginLeft: "10px"
                  }}
                >
                  Add Forms
                </Button>
              </div>

              {planVsActualAdded &&
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5><b>Plan VS Actual Form</b></h5>
                    <h5 onClick={handlePlanClose} style={{ cursor: "pointer", color: "red" }}>
                      <b>close</b>
                    </h5>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Form.Group className="mb-3" style={{ width: "50%" }}>
                      <Form.Label><b>Graph Name 1</b></Form.Label>
                      <Form.Control
                        type="text"
                        value={planname}
                        onChange={(e) => setPlanName(e.target.value)}
                        placeholder="Enter Graph Name"
                        className="custom-input"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ width: "50%" }}>
                      <Form.Label><b>Graph Name 2</b></Form.Label>
                      <Form.Control
                        type="text"
                        value={planname2}
                        onChange={(e) => setPlanName2(e.target.value)}
                        placeholder="Enter Graph Name 2"
                        className="custom-input"
                        required
                      />
                    </Form.Group>
                  </div>

                  {planinputs.map((input, index) => (
                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
                      <Form.Control
                        type="text"
                        name="planLabel"
                        placeholder={`Label ${index + 1}`}
                        value={input.planLabel}
                        onChange={(e) => handlePlanInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />
                      <Form.Control
                        type="number"
                        name="planValue"
                        placeholder={`Value1 - ${index + 1}`}
                        value={input.planValue}
                        onChange={(e) => handlePlanInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />

                      <Form.Control
                        type="number"
                        name="planValue2"
                        placeholder={`Value2 - ${index + 1}`}
                        value={input.planValue2}
                        onChange={(e) => handlePlanInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />

                      <div style={{ marginTop: "10px" }}>
                        <Button
                          style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
                          onClick={() => deletePlanInputField(index)}
                          disabled={index === 0}
                        >
                          Delete Field
                        </Button>
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <Button style={{ backgroundColor: "black", color: "white" }} onClick={addPlanInputField}>
                          Add Field
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {budget &&
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5><b>Budget</b></h5>
                    <h5 onClick={handleBudgetClose} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Form.Group className="mb-3" style={{ width: "50%" }}>
                      <Form.Label><b>Graph Name</b></Form.Label>
                      <Form.Control
                        type="text"
                        value={budgetName}
                        onChange={(e) => setBudgetName(e.target.value)}
                        placeholder="Enter name"
                        className="custom-input"
                        required
                      />
                    </Form.Group>
                  </div>

                  {budgetInputs.map((input, index) => (
                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
                      <Form.Control
                        type="text"
                        name="budgetLabel"
                        placeholder={`Label ${index + 1}`}
                        value={input.budgetLabel}
                        onChange={(e) => handleBudgetInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />
                      <Form.Control
                        type="number"
                        name="budgetValue"
                        placeholder={`Value - ${index + 1}`}
                        value={input.budgetValue}
                        onChange={(e) => handleBudgetInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />

                      <div style={{ marginTop: "10px" }}>
                        <Button
                          style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
                          onClick={() => deleteBudgetInputField(index)}
                          disabled={index === 0}
                        >
                          Delete Field
                        </Button>
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <Button style={{ backgroundColor: "black", color: "white" }} onClick={addBudgetInputField}>
                          Add Field
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {earned &&
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5><b>Earned</b></h5>
                    <h5 onClick={handleEarnedClose} style={{ cursor: "pointer", color: "red" }}>
                      <b>close</b>
                    </h5>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Form.Group className="mb-3" style={{ width: "50%" }}>
                      <Form.Label><b>Graph Name</b></Form.Label>
                      <Form.Control
                        type="text"
                        value={earnedName}
                        onChange={(e) => setEarnedName(e.target.value)}
                        placeholder="Enter name"
                        className="custom-input"
                        required
                      />
                    </Form.Group>
                  </div>

                  {earnedInputs.map((input, index) => (
                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: "center" }}>
                      <Form.Control
                        type="text"
                        name="earnedLabel"
                        placeholder={`Label ${index + 1}`}
                        value={input.earnedLabel}
                        onChange={(e) => handleEarnedInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />
                      <Form.Control
                        type="number"
                        name="earnedValue"
                        placeholder={`Value - ${index + 1}`}
                        value={input.earnedValue}
                        onChange={(e) => handleEarnedInputChange(index, e)}
                        style={{
                          border: '2px solid #929292',
                          width: '100%',
                          borderRadius: '7px',
                          height: '40px',
                          padding: '10px',
                          marginTop: '10px'
                        }}
                        required
                      />
                      <div style={{ marginTop: "10px" }}>
                        <Button
                          style={{ backgroundColor: index === 0 ? "gray" : "black", color: "white" }}
                          onClick={() => deleteEarnedInputField(index)}
                          disabled={index === 0}
                        >
                          Delete Field
                        </Button>
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <Button style={{ backgroundColor: "black", color: "white" }} onClick={addEarnedInputField}>
                          Add Field
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {spi &&
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5><b>SPI</b></h5>
                    <h5 onClick={handleSpiClose} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>
                  </div>

                  <Form.Control
                    type="number"
                    min={-1}
                    max={1}
                    step="0.01"
                    value={spiValue}
                    onChange={(e) => setSPIValue(e.target.value)}
                    placeholder="Enter SPI (-1 to 1)"
                    style={{ width: '200px', border: '2px solid #929292', borderRadius: '7px', padding: '10px', }}
                    required
                  />
                </div>
              }

              {cpi &&
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5><b>CPI</b></h5>
                    <h5 onClick={handleCpiClose} style={{ cursor: "pointer", color: "red" }}><b>close</b></h5>
                  </div>

                  <Form.Control
                    type="number"
                    min={-1}
                    max={1}
                    step="0.01"
                    value={cpiValue}
                    onChange={(e) => setCPIValue(e.target.value)}
                    placeholder="Enter CPI (-1 to 1)"
                    style={{ width: '200px', border: '2px solid #929292', borderRadius: '7px', padding: '10px' }}
                    required
                  />
                </div>
              }

              {(planVsActualAdded || budget || earned || spi || cpi) &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      height: 60,
                      color: 'white',
                      width: '25%',
                      borderRadius: 5,
                      fontSize: 20,
                      fontWeight: 500,
                      backgroundColor: 'black',
                      borderColor: 'transparent',
                      marginTop: '20px',
                      marginLeft: "10px"
                    }}
                    type='submit'
                  >
                    Generate
                  </Button>
                </div>
              }
            </Form>
          }
        </>
      ) : (
        <div className="container p-4">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-3" style={{
                background: 'linear-gradient(to left, #0728e6, #010d57)',
                borderRadius: "15px",
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
                color: "white"
              }}>
                <ResponsiveContainer width="100%" height={350}>
                  <div style={{ marginBottom: '20px' }}>
                    <p><b>Graph Name:</b> {name}</p>
                    <p><b>Description:</b> {description}</p>
                    <p><b>Project Summary:</b> {projectSummary}</p>
                    <p><b>Project Start Date:</b> {projectStartDate?.toLocaleDateString() || 'N/A'}</p>
                    <p><b>Project End Date:</b> {projectEndDate?.toLocaleDateString() || 'N/A'}</p>
                  </div>
                </ResponsiveContainer>
              </div>
            </div>

            {planChartData && showPlanGraph && (
              <div className="col-md-6">
                <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
                  <div style={{ marginBottom: '40px' }}>
                    <div className="p-3 bg-white" style={{
                      borderRadius: "15px",
                      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                      height: "100%"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                        <div>
                          <h4>Plan vs Actual</h4>
                        </div>
                        <div onClick={() => setPlanMenuOpen(!planMenuOpen)} style={{ position: "relative" }}>
                          <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                            <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                          </div>
                          <div className="" style={{
                            display: planMenuOpen ? "block" : "none",
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            background: "#fff",
                            border: "1px solid #ccc",
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                            zIndex: 100,
                            padding: 8
                          }}>
                            <div onClick={() => handleEdit("planActive")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
                            <div onClick={handlePlanClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
                            <div style={{ marginLeft: '-4px' }}>
                              <select
                                value={selectedPlanChart}
                                onChange={(e) => setSelectedPlanChart(e.target.value)}
                                style={{
                                  border: 'none',
                                  fontSize: '14px',
                                  background: "none",
                                }}
                              >
                                <option value="line">Line Graph</option>
                                <option value="bar">Bar Graph</option>
                                <option value="pie">Pie Graph</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {selectedPlanChart === 'line' &&
                        <div>
                          <p>Line Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={planinputs} style={{ width: "100%" }}>
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
                              <Area dataKey="planValue" fill="url(#area-gradient)" />
                              <Area dataKey="planValue2" fill="url(#gradient2)" />
                              <CartesianGrid stroke="#f5f5f5" />
                              <XAxis dataKey="planLabel" />
                              <YAxis />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      }
                      {selectedPlanChart === 'bar' &&
                        <div>
                          <p>Bar Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={planinputs} style={{ width: "100%" }}>
                              <defs>
                                <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="planLabel" />
                              <YAxis />
                              <Bar dataKey="planValue" fill="url(#bar-gradient)" barSize={15} radius={[10, 10, 0, 0]} />
                              <Bar dataKey="planValue2" fill="#ff6b6b" barSize={15} radius={[10, 10, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      }
                      {selectedPlanChart === 'pie' &&
                        <div>
                          <p>Pie Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={sanitizedPlanInputs}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={120}
                                dataKey="planValue"
                                label
                              >
                                {sanitizedPlanInputs.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}

            {budgetChartData&& showBudgetGraph && (
              <div className="col-md-6">
                <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
                  <div style={{ marginBottom: '40px' }}>
                    <div className="p-3 bg-white" style={{
                      borderRadius: "15px",
                      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                      height: "100%"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4>Budget</h4>
                        </div>
                        <div onClick={() => setBudgetMenuOpen(!budgetMenuOpen)} style={{ position: "relative" }}>
                          <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                            <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                          </div>
                          <div className="" style={{
                            display: budgetMenuOpen ? "block" : "none",
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            background: "#fff",
                            border: "1px solid #ccc",
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                            zIndex: 100,
                            padding: 8
                          }}>
                            <div onClick={() => handleEdit("budget")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
                            <div onClick={handleBudgetClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
                            <div style={{ marginLeft: '-4px' }}>
                              <select
                                value={selectedBudgetChart}
                                onChange={(e) => setSelectedBudgetChart(e.target.value)}
                                style={{
                                  border: 'none',
                                  fontSize: '14px',
                                  background: "none",
                                }}
                              >
                                <option value="line">Line Graph</option>
                                <option value="bar">Bar Graph</option>
                                <option value="pie">Pie Graph</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {selectedBudgetChart === 'line' &&
                        <div>
                          <p>Line Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={budgetInputs} style={{ width: "100%" }}>
                              <defs style={{ width: "100%" }}>
                                <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <Area dataKey="budgetValue" fill="url(#area-gradient)" />
                              <CartesianGrid stroke="#f5f5f5" />
                              <XAxis dataKey="budgetLabel" />
                              <YAxis />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      }

                      {selectedBudgetChart === 'bar' &&
                        <div>
                          <p>Bar Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={budgetInputs} style={{ width: "100%" }}>
                              <defs>
                                <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="budgetLabel" />
                              <YAxis />
                              <Bar dataKey="budgetValue" fill="url(#bar-gradient)" barSize={10} radius={[10, 10, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      }

                      {selectedBudgetChart === 'pie' &&
                        <div>
                          <p>Pie Chart</p>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={sanitizedBudgetInputs}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={120}
                                dataKey="budgetValue"
                                label
                              >
                                {sanitizedBudgetInputs.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}

            {earnedChartData && showEarnedGraph && (
              <div className="col-md-6">
                <div style={{ marginBottom: '40px' }}>
                  <div className="p-3 bg-white" style={{
                    borderRadius: "15px",
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                    height: "100%"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <h4>Earned</h4>
                      </div>
                      <div onClick={() => setEarnedMenuOpen(!earnedMenuOpen)} style={{ position: "relative" }}>
                        <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                          <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                        </div>
                        <div className="" style={{
                          display: earnedMenuOpen ? "block" : "none",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "#fff",
                          border: "1px solid #ccc",
                          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          zIndex: 100,
                          padding: 8
                        }}>
                          <div onClick={() => handleEdit("earned")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
                          <div onClick={handleEarnedClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
                          <div style={{ marginLeft: '-4px' }}>
                            <select
                              value={selectedEarnedChart}
                              onChange={(e) => setSelectedEarnedChart(e.target.value)}
                              style={{
                                border: 'none',
                                fontSize: '14px',
                                background: "none",
                              }}
                            >
                              <option value="line">Line Graph</option>
                              <option value="bar">Bar Graph</option>
                              <option value="pie">Pie Graph</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedEarnedChart === 'line' &&
                      <div>
                        <p>Line Chart</p>
                        <ResponsiveContainer width="100%" height={300}>
                          <AreaChart data={earnedInputs} style={{ width: "100%" }}>
                            <defs style={{ width: "100%" }}>
                              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                <stop offset="100%" stopColor="#0728e6" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <Area dataKey="earnedValue" fill="url(#area-gradient)" />
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="earnedLabel" />
                            <YAxis />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    }

                    {selectedEarnedChart === 'bar' &&
                      <div>
                        <p>Bar Chart</p>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={earnedInputs} style={{ width: "100%" }}>
                            <defs>
                              <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#010d57" stopOpacity={1} />
                                <stop offset="100%" stopColor="#0728e6" stopOpacity={1} />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="earnedLabel" />
                            <YAxis />
                            <Bar dataKey="earnedValue" fill="url(#bar-gradient)" barSize={10} radius={[10, 10, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    }

                    {selectedEarnedChart === 'pie' &&
                      <div>
                        <p>Pie Chart</p>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={sanitizedEarnedInputs}
                              cx="50%"
                              cy="50%"
                              innerRadius={70}
                              outerRadius={120}
                              dataKey="earnedValue"
                              label
                            >
                              {sanitizedEarnedInputs.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    }
                  </div>
                </div>
              </div>
            )}

            {spi && showSPIGraph && (
              <div className="col-md-6">
                <div style={{ marginBottom: '40px' }}>
                  <div className="p-3 bg-white" style={{
                    borderRadius: "15px",
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                    height: "100%"
                  }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <h4>SPI</h4>
                      </div>
                      <div onClick={() => setSpiMenuOpen(!spiMenuOpen)} style={{ position: "relative" }}>
                        <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                          <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                        </div>
                        <div className="" style={{
                          display: spiMenuOpen ? "block" : "none",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "#fff",
                          border: "1px solid #ccc",
                          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          zIndex: 100,
                          padding: 8
                        }}>
                          <div onClick={() => handleEdit("SPI")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
                          <div onClick={handleSpiClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', height: "300px", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center" }}>
                      <ReactSpeedometer
                        minValue={-1}
                        maxValue={1}
                        value={spiChartValue}
                        segments={3}
                        needleColor="steelblue"
                        customSegmentStops={[-1, -0.4, 0.4, 1]}
                        segmentColors={["darkgreen", "orange", "red"]}
                        currentValueText={`SPI: ${spiChartValue}`}
                        height={350}
                        width={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {cpi&& showCPIGraph && (
              <div className="col-md-6">
                <div style={{ marginBottom: '40px' }}>
                  <div className="p-3 bg-white" style={{
                    borderRadius: "15px",
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                    height: "100%"
                  }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <h4>CPI</h4>
                      </div>
                      <div onClick={() => setCpiMenuOpen(!cpidMenuOpen)} style={{ position: "relative" }}>
                        <div style={{ background: "#cfdef7", height: "30px", borderRadius: "5px" }}>
                          <img src="./menu.svg" style={{ height: "20px", cursor: "pointer" }} />
                        </div>
                        <div className="" style={{
                          display: cpidMenuOpen ? "block" : "none",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "#fff",
                          border: "1px solid #ccc",
                          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          zIndex: 100,
                          padding: 8
                        }}>
                          <div onClick={() => handleEdit("CPI")} style={{ cursor: "pointer", fontSize: "14px", }}>Edit</div>
                          <div onClick={handleCpiClose} style={{ cursor: "pointer", fontSize: "14px" }}>Remove</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ width: '100%', maxWidth: '700px', height: "300px", margin: '0 auto', display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center" }}>
                      <ReactSpeedometer
                        minValue={-1}
                        maxValue={1}
                        value={cpiChartValue}
                        segments={3}
                        needleColor="steelblue"
                        customSegmentStops={[-1, -0.4, 0.4, 1]}
                        segmentColors={["darkgreen", "orange", "red"]}
                        currentValueText={`CPI: ${cpiChartValue}`}
                        height={350}
                        width={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => window.location.reload()} style={{
              height: 60,
              color: 'white',
              width: '25%',
              borderRadius: 5,
              fontSize: 20,
              fontWeight: 500,
              backgroundColor: 'black',
              borderColor: 'transparent',
              marginTop: '20px'
            }}>
              Refresh
            </Button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              width: '500px',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="secondary"
              style={{ padding: "10px", margin: "10px" }}
              onClick={() => handleFormSelection('planVsActual')}
              disabled={planVsActualAdded}
            >
              Plan VS Actual
            </Button>
            <Button variant="secondary"
              style={{ padding: "10px", margin: "10px" }}
              onClick={() => handleFormSelection('Budget')}
              disabled={budget}> Budget</Button>

            <Button variant="secondary"
              style={{ padding: "10px", margin: "10px" }}
              onClick={() => handleFormSelection('Earned')}
              disabled={earned}> Earned</Button>

            <Button variant="secondary"
              style={{ padding: "10px", margin: "10px" }}
              onClick={() => handleFormSelection('SPI')}
              disabled={spi}> SPI</Button>

            <Button variant="secondary"
              style={{ padding: "10px", margin: "10px" }}
              onClick={() => handleFormSelection('CPI')}
              disabled={cpi}> CPI</Button>

            <div style={{ textAlign: 'right' }}>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
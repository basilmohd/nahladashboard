import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SimpleAnalyticsChart from '../components/SimpleAnalyticsChart';
import SpeedometerBar from '../components/SpeedometerBar'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import TableComponent from '../components/TableComponent';

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
  const [selectedDate, setSelectedDate] = useState("Dates");
  const [arrangedData, setArrangedData] = useState({});
  const [dates, setDates] = useState([]);
  const [lookAheadColumns, setlookAheadColumns] = useState([]);
  const [projectDataTableColumns, setprojectDataTableColumns] = useState([]);
  const [lookAheadTableData, setlookAheadTableData] = useState([]);
  const [projectDataTableData, setprojectDataTableData] = useState([]);

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  // console.log("premativeData?.Task_Status", premativeData?.Task_Status)

  const hardCodedData = {    
      "projectStartDate": "2011-03-01",
      "projectEndDate": "2011-08-27",
      "label": [
        "Planned Progress (%)",
        "Actual Progress (%)",
        "Budget",
        "Planned Value (PV)",
        "Earned Value (EV)",
        "Schedule Variance (SV)",
        "Cost Variance (CV)",
        "Schedule Performance Index (SPI)",
        "Cost Performance Index (CPI)",
        "Estimate at Completion (EAC)",
        "Estimate to Complete (ETC)",
        "Variance at Completion (VAC)",
        "Estimated Project End Date"
      ],
      "range": [
        { "value": [23.0, 19.75, 15043.0, 3459.89, 2970.99, -488.89, -3529.00, 0.85, 0.45, 32911.39, 26411.39, -17868.39, "2011-08-27"], "chartType": "lineChart", "date": "2011-03-01" },
        { "value": [24.0, 20.10, 15100.0, 3500.00, 3000.00, -500.00, -3500.00, 0.87, 0.46, 33000.00, 26500.00, -17800.00, "2011-08-28"], "chartType": "lineChart", "date": "2011-03-02" },
        { "value": [25.0, 21.00, 15200.0, 3550.00, 3050.00, -520.00, -3480.00, 0.88, 0.47, 33100.00, 26600.00, -17750.00, "2011-08-29"], "chartType": "lineChart", "date": "2011-03-03" },
        { "value": [26.0, 22.00, 15300.0, 3600.00, 3100.00, -540.00, -3460.00, 0.89, 0.48, 33200.00, 26700.00, -17700.00, "2011-08-30"], "chartType": "lineChart", "date": "2011-03-04" },
        { "value": [27.0, 23.00, 15400.0, 3650.00, 3150.00, -560.00, -3440.00, 0.90, 0.49, 33300.00, 26800.00, -17650.00, "2011-08-31"], "chartType": "lineChart", "date": "2011-03-05" },
        { "value": [28.0, 24.00, 15500.0, 3700.00, 3200.00, -580.00, -3420.00, 0.91, 0.50, 33400.00, 26900.00, -17600.00, "2011-09-01"], "chartType": "lineChart", "date": "2011-03-06" },
        { "value": [29.0, 25.00, 15600.0, 3750.00, 3250.00, -600.00, -3400.00, 0.92, 0.51, 33500.00, 27000.00, -17550.00, "2011-09-02"], "chartType": "lineChart", "date": "2011-03-07" },
        { "value": [30.0, 26.00, 15700.0, 3800.00, 3300.00, -620.00, -3380.00, 0.93, 0.52, 33600.00, 27100.00, -17500.00, "2011-09-03"], "chartType": "lineChart", "date": "2011-03-08" },
        { "value": [31.0, 27.00, 15800.0, 3850.00, 3350.00, -640.00, -3360.00, 0.94, 0.53, 33700.00, 27200.00, -17450.00, "2011-09-04"], "chartType": "lineChart", "date": "2011-03-09" },
        { "value": [32.0, 28.00, 15900.0, 3900.00, 3400.00, -660.00, -3340.00, 0.95, 0.54, 33800.00, 27300.00, -17400.00, "2011-09-05"], "chartType": "lineChart", "date": "2011-03-10" },
        { "value": [45.0, 35.12, 15090.0, 3470.00, 3020.00, -420.00, -3500.00, 0.95, 0.48, 32950.00, 26450.00, -17820.00, "2011-08-27"], "chartType": "lineChart", "date": "2011-03-11" },
        { "value": [60.0, 35.00, 15150.0, 3520.00, 2990.00, -470.00, -3490.00, 0.90, 0.50, 33050.00, 26550.00, -17810.00, "2011-08-28"], "chartType": "lineChart", "date": "2011-03-12" },
        { "value": [60.0, 55.00, 15250.0, 3570.00, 3070.00, -510.00, -3470.00, 0.92, 0.52, 33150.00, 26650.00, -17760.00, "2011-08-29"], "chartType": "lineChart", "date": "2011-03-13" },
        { "value": [70.0, 65.00, 15350.0, 3620.00, 3120.00, -530.00, -3450.00, 0.88, 0.46, 33250.00, 26750.00, -17710.00, "2011-08-30"], "chartType": "lineChart", "date": "2011-03-14" },
        { "value": [70.0, 65.00, 15450.0, 3670.00, 3170.00, -570.00, -3430.00, 0.96, 0.54, 33350.00, 26850.00, -17660.00, "2011-08-31"], "chartType": "lineChart", "date": "2011-03-15" },
        { "value": [75.0, 66.00, 15550.0, 3720.00, 3220.00, -590.00, -3410.00, 0.91, 0.49, 33450.00, 26950.00, -17610.00, "2011-09-01"], "chartType": "lineChart", "date": "2011-03-16" },
        { "value": [80.0, 67.00, 15650.0, 3770.00, 3270.00, -610.00, -3390.00, 0.93, 0.51, 33550.00, 27050.00, -17560.00, "2011-09-02"], "chartType": "lineChart", "date": "2011-03-17" },
        { "value": [85.0, 68.00, 15750.0, 3820.00, 3320.00, -630.00, -3370.00, 0.97, 0.55, 33650.00, 27150.00, -17510.00, "2011-09-03"], "chartType": "lineChart", "date": "2011-03-18" },
        { "value": [90.0, 75.00, 15850.0, 3870.00, 3370.00, -650.00, -3350.00, 0.89, 0.47, 33750.00, 27250.00, -17460.00, "2011-09-04"], "chartType": "lineChart", "date": "2011-03-19" },
        { "value": [95.0, 80.00, 15950.0, 3920.00, 3420.00, -670.00, -3330.00, 0.98, 0.56, 33850.00, 27350.00, -17410.00, "2011-09-05"], "chartType": "lineChart", "date": "2011-03-20" }
      ]
    
  }

  const labelValueMap = {};

  const getErrorMessage = () => {
    if (promptError) return promptError?.error;
    if (dataError) return dataError;
    if (premativeError) return premativeError;
    return null;
  };

  const responseData = promptData || data || premativeData || hardCodedData;

  console.log("responseData", responseData);

  useEffect(() => {
    if (responseData) {
      const labels = responseData.label;
      const range = responseData.range;
      const tempArrangedData = {};
      const extractedDates = range.map(row => row.date);

      range.forEach(row => {
        const date = row.date;
        const values = row.value;

        const labelValueMap = {};
        labels.forEach((label, index) => {
          labelValueMap[label] = values[index];
        });

        tempArrangedData[date] = labelValueMap;
      });

      console.log('dates', extractedDates);
      console.log('arrangedData', tempArrangedData);

      if (
      JSON.stringify(extractedDates) !== JSON.stringify(dates) ||
      selectedDate !== extractedDates[extractedDates.length - 1] ||
      JSON.stringify(arrangedData) !== JSON.stringify(tempArrangedData)
    ) {
      setDates(extractedDates);
      setSelectedDate(extractedDates[extractedDates.length - 1]);
      setArrangedData(tempArrangedData);
      setlookAheadColumns([
        { key: "tasks", header: "Tasks", width: "40%" },
        { key: "si", header: "SI", width: "30%" },
        { key: "fn", header: "FN", width: "30%" },
      ]);
      setlookAheadTableData([
        { "tasks":"Task 1", "si":"12.23", "fn":"123"},
        { "tasks":"Task 2", "si":"12.24", "fn":"1234"},
        { "tasks":"Task 3", "si":"12.25", "fn":"12345"},
      ])
      setprojectDataTableColumns([
        { key: "tasks", header: "Tasks" },
        { key: "completedTask", header: "Completed Task" },
        { key: "ongoing", header: "OnGoing" },
        { key: "notStarted", header: "NotStarted" },
        { key: "status", header: "Status" },
      ]);
      setprojectDataTableData([
        { "tasks":"Task 1", "completedTask":"12.23", "ongoing":"123", "notStarted":"Yes", "status":"Online"},
        { "tasks":"Task 2", "completedTask":"12.24", "ongoing":"1234", "notStarted":"No", "status":"Online"},
        { "tasks":"Task 3", "completedTask":"12.25", "ongoing":"12345", "notStarted":"Yes", "status":"Offline"},
      ])
    }
    }
  }, [responseData])

  console.log('labelValueMap', labelValueMap);

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

  return (
    <>
      {/* Dates Dropdown */}
      {/* <div className='row float-end m-2'>
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">{selectedDate}</Button>
          <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            {dates &&
              dates.map((date, index) => (
                <Dropdown.Item key={index} onClick={() => handleSelect(date)}>
                  {date}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
      <div className="container p-4">
        {/* Key Metrics */}
        {selectedDate != 'Dates' && Object.keys(arrangedData).length > 0 &&
          <div className='row g-4'>
            <div className='col-md-3 m-2'>
              <SpeedometerBar
                selectedDate={selectedDate}
                currentValueText='Schedule Performance Index (SPI)'
                arrangedData={arrangedData}
              />
            </div>
            <div className='col-md-3 m-2'>
              <SpeedometerBar
                selectedDate={selectedDate}
                currentValueText='Cost Performance Index (CPI)'
                arrangedData={arrangedData}
              />
            </div>
          </div>
        }
        {/* Project data charts */}
        <div className="row g-4">
          <div className="col-md-6">
            <SimpleAnalyticsChart responseData={responseData} chartFor={["Planned Progress (%)","Actual Progress (%)"]} />
          </div>
          
        </div>
        {/* Project Data */}
        <div className='row g-4'>

        </div>
      </div>
      <div style={{ display:"flex", margin:"2rem"}}>
        {/* 2 weeks lookahead */}
        <div className='m-2'>
          <TableComponent columns={lookAheadColumns} data={lookAheadTableData} ></TableComponent>
        </div>
        {/* Project Data Table */}
        <div className='m-2'>
          <TableComponent columns={projectDataTableColumns} data={projectDataTableData}></TableComponent>
        </div>
      </div>
    </>
  );
}

export default Analytics_mod;

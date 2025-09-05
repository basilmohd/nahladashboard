import ReactSpeedometer from "react-d3-speedometer";
import { ResponsiveContainer } from "recharts";

const SpeedometerBar = ({ selectedDate, arrangedData, currentValueText }) => {

    const replaceCurrentValueText = {
        'Schedule Performance Index (SPI)': 'SPI',
        'Cost Performance Index (CPI)': 'CPI'
    }

    const selectedValue = arrangedData[selectedDate][currentValueText]
    const label = replaceCurrentValueText[currentValueText] + ':' + selectedValue
    console.log('selectedValue', selectedValue);
    return (
            <div className='row'>
                <ReactSpeedometer
                    minValue={0}
                    maxValue={1}
                    value={selectedValue}
                    segments={3}
                    needleColor="steelblue"
                    customSegmentStops={[0, 0.5, 1]}
                    segmentColors={["green", "red"]}
                    startColor="#FF471A"
                    endColor="#33CC33"
                    currentValueText={label}
                    height={200}
                    width={200}
                />
            </div>
    )
}

export default SpeedometerBar;
import ReactSpeedometer from "react-d3-speedometer";
import { ResponsiveContainer } from "recharts";

const SpeedometerBar = ({ selectedDate, arrangedData, currentValueText }) => {

    const replaceCurrentValueText = {
        'Schedule Performance Index (SPI)': 'SPI',
        'Cost Performance Index (CPI)': 'CPI'
    }
    
    const selectedValue = arrangedData[selectedDate][currentValueText]
    const label  = replaceCurrentValueText[currentValueText]+':'+selectedValue
    console.log('selectedValue', selectedValue);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='row g-4'>
                <div>
                    <ReactSpeedometer
                        minValue={0}
                        maxValue={1}
                        value={selectedValue}
                        segments={3}
                        needleColor="steelblue"
                        customSegmentStops={[0, 1]}
                        segmentColors={["darkgreen", "orange", "red"]}
                        currentValueText={label}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        </ResponsiveContainer>
    )
}

export default SpeedometerBar;
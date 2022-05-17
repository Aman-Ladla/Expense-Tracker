import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(point => point.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {
                props.dataPoints.map(datapoint => {
                    return (
                        <ChartBar key={datapoint.label} label={datapoint.label} value={datapoint.value} maxValue={maxValue} />
                    );
                })
            }
        </div>
    );
}

export default Chart;
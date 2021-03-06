import React from 'react'
import LineChart from './line-chart'
import LineChartGrouped from './line-chart-grouped'

const LineChartGate = (props) => {
    const { data } = props

    if (!data.length)
      return null;

    if (data[0].hasOwnProperty('data')) {
        return <LineChartGrouped { ...props } />
    }

    return <LineChart { ...props } />
}

export default LineChartGate

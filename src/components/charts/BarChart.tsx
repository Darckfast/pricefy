import React, { useEffect } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

type Items = {
  date: Date
  price: number
  store: string
}

const BarChart: React.FC<{ chartData: Items[] }> = ({
  chartData: [...pricedItems]
}) => {
  useEffect(() => {
    console.log(pricedItems)
  })
  return (
    <LineChart width={500} height={300} data={pricedItems}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
    </LineChart>
  )
}

export default BarChart

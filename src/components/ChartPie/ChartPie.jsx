import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export function ChartPie(props) {
  console.log(props)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
        <Pie data={props.pie} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
    </ResponsiveContainer>
  )
} 
import React from 'react';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export function ChatrLine({ line }) {

  const getDate = (el) => {
    return (
      moment(el.point).locale('ru').format("DD MMMM hh:mm")
    )
  }

  const getIntroOfPage = (item) => {
    return (
      <div>
        <p className='tooltip__intro'>Количество: {item.payload.items}</p>
      </div>
    )
  }

  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="tooltip__label">{label}</p>
          {getIntroOfPage(payload[0])}
        </div>
      );
    }

    return null;
  }

  return (
    <ResponsiveContainer width="70%" height={300}>
      <LineChart width={300} height={300} data={line}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={(el) => getDate(el)}
          style={{ fontFamily: 'Montserrat', fontSize: 12 }}
        />
        <YAxis
          style={{ fontFamily: 'Montserrat', fontSize: 12 }}
          domain={['dataMin', 'dataMax']}
        />
        <Tooltip
          content={<CustomToolTip />}
        />
        <Legend
          wrapperStyle={{ fontFamily: 'Montserrat', fontSize: 12 }}
        />
        <Line name='Количество' type="monotone" dataKey="items" stroke="#8884d8" strokeWidth={4} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
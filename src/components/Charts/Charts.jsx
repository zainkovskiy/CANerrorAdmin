import React, { useEffect, useState } from 'react';

import { ChartPie } from 'components/ChartPie';
import { ChatrLine } from 'components/ChatrLine';

import './Charts.scss'

export function Charts({ pie, line }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (pie.length > 0) {
      countPieChart();
    }
  }, [pie]);

  const countPieChart = () => {
    let countData = {
      exclusive: 0,
      mls: 0,
      advertising: 0,
      trend: 0,
    }
    /** потом можно условие if else убрать */
    pie.map(item => {
      if (item.type !== 'a' && item.type !== 'e') {
        countData[item.type]++
      }
    })
    setActualData(countData);
  }
  const setActualData = (countData) => {
    const dataNew = [];
    for (let key in countData) {
      dataNew.push({ name: rusValue[key], value: countData[key] })
    }
    setData(dataNew);
  }
  return (
    <div className="charts">
      {
        data.length > 0 &&
        <>
          <ChartPie pie={data} />
          <ChatrLine line={line} />
        </>
      }
    </div>
  )
}

const rusValue = {
  advertising: 'РД',
  exclusive: 'Эксклюзив',
  mls: 'МЛС',
  trend: 'Новостройки',
}
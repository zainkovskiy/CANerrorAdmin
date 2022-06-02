import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { TabPanel } from 'components/TabPanel';
import { ContentlFilter } from 'components/ContentlFilter';

import './Content.scss';

export function Content({ list }) {
  const [value, setValue] = useState(0);
  const [filtred, setFiltred] = useState(list)
  const [operational, setOperational] = useState([])
  const [operationalFilter, setOperationalFilter] = useState([])
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [startTimer, setStartTimer] = useState(false);
  const timerRef= useRef(null);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if (startTimer){
      timerRef.current = setInterval(() => {
        getData();
      }, 60000)      
    }
    return () => {
      timerRef.current && clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [startTimer])

  const getData = async () => {
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Feed/Controller.php', { action: 'getOper' });
      res?.data && setOperational(res.data)
      if (!startTimer) {
        res?.data && setOperationalFilter(res.data)
      }
      setStartTimer(true);
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    if (operational.length > 0) {
      if (value === 1 && currentSearchValue) {
        filterOper(currentSearchValue);
      } else {
        setOperationalFilter(operational)
      }
    }
  }, [operational])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const filter = (search, select, name) => {
    setCurrentSearchValue(search);
    if (name === 'active') {
      filterActive(search, select)
    }
    if (name === 'oper') {
      filterOper(search)
    }
  }
  const filterActive = (search, select) => {
    const regExp = new RegExp(search, 'i');
    if (select === 'all') {
      return setFiltred(list.filter(item => regExp.test(item.UID)))
    }
    return setFiltred(list.filter(item => regExp.test(item.UID) && item.type === select))
  }

  const filterOper = (search) => {
    const regExp = new RegExp(search, 'i');
    return setOperationalFilter(operational.filter(item => regExp.test(item.reqNumber)))
  }

  return (
    <div className="content">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 99 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Активное содержимое" {...a11yProps(0)} />
          <Tab label="Оперативное содержимое" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ContentlFilter filter={filter} name='active' />
        {
          filtred.length > 0 ?
            filtred.map(row =>
              <p
                className="text content__text"
                key={row.UID}
                onClick={() => console.log(row.UID)}
              >
                {row.UID} {rusValue[row.type]}
              </p>
            ) :
            <p className="text content__text">нет данных</p>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentlFilter filter={filter} name='oper' />
        {
          operationalFilter.length > 0 ?
            operationalFilter.map(row =>
              <p
                className="text content__text"
                key={row.reqNumber}
                onClick={() => console.log(row.reqNumber)}
              >
                Номер: {row.reqNumber} Контакт: {row.contractId} Выгружен: {row.onFeed === 1 ? 'Да' : 'Нет'}
              </p>
            ) :
            <p className="text content__text">нет данных</p>
        }
      </TabPanel>
    </div>
  )
}

const rusValue = {
  advertising: 'РД',
  exclusive: 'Эксклюзив',
  mls: 'МЛС',
  trend: 'Новостройки',
}
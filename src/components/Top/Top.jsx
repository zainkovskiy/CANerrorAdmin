import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Linear } from 'components/Linear';
import { Feed } from 'components/Feed';
import { Main } from 'components/Main';

import './Top.scss';

export function Top() {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [currentFeed, setCurrentFeed] = useState(null);

  useEffect(() => {
    getData();
  }, [])
  useEffect(() => {
    if (data?.length > 0 && start) {
      setCurrentFeed(data[0]);
      setStart(false)
    }
  }, [data])

  const getData = async () => {
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Feed/Controller.php', { action: 'get' });
      res?.data && setData(res.data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {
        loading ?
          <Linear /> :
          <>
            {
              error ?
                <p className='text'
                  style={{
                    fontWeight: '400',
                    textAlign: 'center'
                  }}>error</p> :
                <div className='top'>
                  <Feed
                    data={data}
                    currentFeed={currentFeed}
                    setCurrentFeed={setCurrentFeed}
                  />
                  {
                    currentFeed?.type === 'main' ?
                      <Main currentFeed={currentFeed} /> :
                      <div style={{ width: '100%' }}>different feed</div>
                  }
                </div>
            }
          </>
      }
    </>
  )
}
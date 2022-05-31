import React, { useState, useEffect } from 'react';

import { Items } from 'components/Items';
import { Main } from 'components/Main';

import './Top.scss';

export function Top() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(false);
    setData({
      "main": {
        "statistic": [
          {
            "point": "2022-05-31 10:11:51.948270",
            "items": "4200",
            "file": "/Selket/Temp/Feed/2022-05-31 10-11-51-centralnoe.xml"
          },
          {
            "point": "2022-05-30 19:10:02.300051",
            "items": "5884",
            "file": "/Selket/Temp/Feed/2022-05-30 19-10-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 18:20:08.193387",
            "items": "4192",
            "file": "/Selket/Temp/Feed/2022-05-30 18-20-08-centralnoe.xml"
          },
          {
            "point": "2022-05-30 16:20:02.267898",
            "items": "5875",
            "file": "/Selket/Temp/Feed/2022-05-30 16-20-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 15:50:01.773450",
            "items": "5872",
            "file": "/Selket/Temp/Feed/2022-05-30 15-50-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 15:30:01.598717",
            "items": "5870",
            "file": "/Selket/Temp/Feed/2022-05-30 15-30-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 15:10:02.126639",
            "items": "5864",
            "file": "/Selket/Temp/Feed/2022-05-30 15-10-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 14:35:58.408959",
            "items": "4172",
            "file": "/Selket/Temp/Feed/2022-05-30 14-35-58-centralnoe.xml"
          },
          {
            "point": "2022-05-30 14:00:01.781041",
            "items": "6053",
            "file": "/Selket/Temp/Feed/2022-05-30 14-00-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 13:40:02.245155",
            "items": "6049",
            "file": "/Selket/Temp/Feed/2022-05-30 13-40-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 13:20:01.977941",
            "items": "6047",
            "file": "/Selket/Temp/Feed/2022-05-30 13-20-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 13:00:02.259569",
            "items": "6043",
            "file": "/Selket/Temp/Feed/2022-05-30 13-00-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 12:30:02.432873",
            "items": "6042",
            "file": "/Selket/Temp/Feed/2022-05-30 12-30-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 11:50:01.362748",
            "items": "6041",
            "file": "/Selket/Temp/Feed/2022-05-30 11-50-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 11:30:02.194492",
            "items": "6039",
            "file": "/Selket/Temp/Feed/2022-05-30 11-30-02-centralnoe.xml"
          },
          {
            "point": "2022-05-30 11:10:01.993145",
            "items": "6038",
            "file": "/Selket/Temp/Feed/2022-05-30 11-10-01-centralnoe.xml"
          },
          {
            "point": "2022-05-30 09:42:21.986517",
            "items": "4146",
            "file": "/Selket/Temp/Feed/2022-05-30 09-42-21-centralnoe.xml"
          },
          {
            "point": "2022-05-30 08:16:57.528217",
            "items": "4148",
            "file": "/Selket/Temp/Feed/2022-05-30 08-16-57-centralnoe.xml"
          },
          {
            "point": "2022-05-29 18:20:05.593425",
            "items": "4220",
            "file": "/Selket/Temp/Feed/2022-05-29 18-20-05-centralnoe.xml"
          },
          {
            "point": "2022-05-28 18:20:52.700188",
            "items": "4235",
            "file": "/Selket/Temp/Feed/2022-05-28 18-20-52-centralnoe.xml"
          },
          {
            "point": "2022-05-27 18:20:14.066936",
            "items": "4236",
            "file": "/Selket/Temp/Feed/2022-05-27 18-20-14-centralnoe.xml"
          },
          {
            "point": "2022-05-27 16:40:02.292433",
            "items": "6117",
            "file": "/Selket/Temp/Feed/2022-05-27 16-40-02-centralnoe.xml"
          },
          {
            "point": "2022-05-27 15:59:41.178726",
            "items": "4225",
            "file": "/Selket/Temp/Feed/2022-05-27 15-59-41-centralnoe.xml"
          },
          {
            "point": "2022-05-27 15:30:01.680225",
            "items": "6117",
            "file": "/Selket/Temp/Feed/2022-05-27 15-30-01-centralnoe.xml"
          },
          {
            "point": "2022-05-27 14:53:55.879155",
            "items": "4225",
            "file": "/Selket/Temp/Feed/2022-05-27 14-53-55-centralnoe.xml"
          },
          {
            "point": "2022-05-27 13:40:01.690019",
            "items": "5739",
            "file": "/Selket/Temp/Feed/2022-05-27 13-40-01-centralnoe.xml"
          },
          {
            "point": "2022-05-27 13:10:01.782775",
            "items": "5720",
            "file": "/Selket/Temp/Feed/2022-05-27 13-10-01-centralnoe.xml"
          },
          {
            "point": "2022-05-27 12:20:01.810457",
            "items": "5710",
            "file": "/Selket/Temp/Feed/2022-05-27 12-20-01-centralnoe.xml"
          },
          {
            "point": "2022-05-27 11:39:33.465706",
            "items": "4210",
            "file": "/Selket/Temp/Feed/2022-05-27 11-39-33-centralnoe.xml"
          },
          {
            "point": "2022-05-26 18:20:32.483073",
            "items": "4219",
            "file": "/Selket/Temp/Feed/2022-05-26 18-20-32-centralnoe.xml"
          }
        ],
        "status": "Ожидание парсинга площадками",
        "update": "2022-05-31 10:11:51.948270",
        "fileSource": "https://hs-01.centralnoe.ru/Feed/centralnoe.zip",
        "active": []
      },
      "cian": null,
    })
  }, [])

  return (
    <>
      {
        loading ?
          <p>Loading...</p> :
          <>
            {
              error ?
                <p>error</p> :
                <div className='top'>
                  <Items />
                  <Main />
                </div>
            }
          </>
      }
    </>
  )
}
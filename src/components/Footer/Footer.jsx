import React, { useState, useEffect, useRef, createRef } from "react";

import { FooterItem } from 'components/FooterItem';

const test = [
  {
    "created": "2022-05-31 10:15:03.801355",
    "source": "Centralnoe",
    "event": "Замена активной копии выполнена"
  },
  {
    "created": "2022-05-31 10:15:01.862073",
    "source": "Centralnoe",
    "event": "Фид успешно обновлен"
  },
  {
    "created": "2022-05-31 10:14:57.250516",
    "source": "Centralnoe",
    "event": "Удалено 8 дублирующихся значений с фида"
  },
]

import './Footer.scss';

export function Footer() {
  const [history, setHistory] = useState([]);
  const lastItem = createRef();
  useEffect(() => {
    setHistory([
      {
        "created": "2022-05-31 10:15:03.801355",
        "source": "Centralnoe",
        "event": "Замена активной копии выполнена"
      },
      {
        "created": "2022-05-31 10:15:01.862073",
        "source": "Centralnoe",
        "event": "Фид успешно обновлен"
      },
      {
        "created": "2022-05-31 10:14:57.250516",
        "source": "Centralnoe",
        "event": "Удалено 8 дублирующихся значений с фида"
      },
      {
        "created": "2022-05-31 10:14:53.467713",
        "source": "Centralnoe",
        "event": "Оперативный список - очищен"
      },
      {
        "created": "2022-05-31 10:14:53.039146",
        "source": "Centralnoe",
        "event": "Дописано 1700 значений TrandAgent"
      },
      {
        "created": "2022-05-31 08:44:57.546853",
        "source": "Yandex",
        "event": "Офферы получены и размещены в активной таблице"
      },
      {
        "created": "2022-05-31 08:44:39.178427",
        "source": "Yandex",
        "event": "Старт процедуры получения офферов"
      }
    ])
    /*Проверка скролла (удалить)*/
    setTimeout(() => {
      setHistory(prevState => [...prevState, ...test])
    }, 5000)
  }, [])
  useEffect(() => {
    if (lastItem.current) {
      lastItem.current.scrollIntoView()
    }
  }, [lastItem])
  return (
    <div className="footer">
      {
        history.length > 0 &&
        history.map((row, idx) => {
          if (idx + 1 === history.length) {
            return <FooterItem key={idx} item={row} ref={lastItem} />
          }
          return <FooterItem key={idx} item={row} />
        })
      }
    </div>
  )
}
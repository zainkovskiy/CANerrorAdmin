import React from "react";
import moment from "moment";

import './FeedItem.scss';

export function FeedItem({ feed, isActive, setCurrentFeed }) {
  return (
    <div className={`feed-item ${isActive}`} 
      onClick={() => setCurrentFeed(feed)}
    >
      <img className="feed-item__img" src={logo[feed.type]} alt="logo" />
      <div className="feed-item__wrap">
        {
          feed?.update &&
          <span className="feed-item__text text">Обновлен: {moment(feed.update).locale('ru').format('DD MMMM YYYY')} </span>
        }
        {
          feed?.status &&
          <span className="feed-item__text text">Статус: {feed.status}</span>
        }
      </div>
    </div>
  )
}

const logo = {
  main: 'https://crm.centralnoe.ru/dealincom/assets/img/centr.png',
  cian: 'https://crm.centralnoe.ru/dealincom/assets/img/cian_logo.png',
}
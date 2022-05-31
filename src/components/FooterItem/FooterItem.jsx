import React, { forwardRef } from "react";
import moment from "moment";

import './FooterItem.scss';

export const FooterItem = forwardRef( ({item}, ref) =>  {
  return (
    <div className="footer-item" ref={ref}>
      <span className="text">{moment(item.created).locale('ru').format('DD MMMM YYYY, hh:mm:ss')}</span>
      <span className="text">{item.source}</span>
      <span className="text">{item.event}</span>
    </div>
  )
})
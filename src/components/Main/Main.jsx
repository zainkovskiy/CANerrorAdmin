import React from 'react';

import { Control } from 'components/Control';
import { Charts } from 'components/Charts';
import { Content } from 'components/Content';

import './Main.scss';

export function Main({ currentFeed }) {
  return (
    <div className="main">
      <Control />
      <Charts
        pie={currentFeed?.active || []}
        line={currentFeed?.statistic || []}
      />
      <Content
        list={currentFeed?.active || []}
      />
    </div>
  )
}
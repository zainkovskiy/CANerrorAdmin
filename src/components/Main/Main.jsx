import React from 'react';

import { Control } from 'components/Control';
import { Charts } from 'components/Charts';
import { Content } from 'components/Content';

import './Main.scss';

export function Main() {
  return (
    <div className="main">
      <Control />
      <Charts />
      <Content />
    </div>
  )
}
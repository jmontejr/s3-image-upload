import React from 'react';

import { Bar } from './style';

const ProgressBar = ({ progress }) => {
  return (
    <Bar width={progress}>
    <strong>{progress}%</strong>
  </Bar>
  );
}

export default ProgressBar;

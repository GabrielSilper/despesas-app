import React from 'react';
import TotalElement from '../style/Total/TotalElement';
import WrapperTotal from '../style/Total/WrapperTotal';

function Total() {
  return (
    <WrapperTotal>
      <TotalElement>
        Total:
        {' '}
        <span>00,</span>
        00
      </TotalElement>
    </WrapperTotal>
  );
}

export default Total;

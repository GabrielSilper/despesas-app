import React from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import EmptyElement from '../style/Empty/EmptyElement';
import WrapperEmpty from '../style/Empty/WrapperEmpty';

function Empty() {
  return (
    <WrapperEmpty>
      <EmptyElement>
        Nenhuma despesa ainda
        {' '}
        <BsEmojiSunglasses size={ 20 } />
      </EmptyElement>
    </WrapperEmpty>
  );
}

export default Empty;

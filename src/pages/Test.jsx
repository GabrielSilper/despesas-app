import React from 'react';
import CollapseComponent from '../components/CollapseComponent';

function Test() {
  const example = {
    name: 'Despesa 1',
    value: '100,00',
    type: 'Comida',
    date: '2023-02-27',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  };
  return (
    <div>
      <h1>Página de Testes</h1>
      <CollapseComponent expense={ example } />
    </div>
  );
}

export default Test;

import React from 'react'
import Container from './Container';
import Data from '../Data';
import './Cards.css';

const Products = () => {
  return (
    <>
      <div>
          <Container data={Data} />
        </div>
    </>
  );
};

export default  Products;
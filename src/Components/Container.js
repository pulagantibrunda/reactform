import React from 'react';
import Cards from './Cards';
import Data from '../Data'

const Container = () => {
  return (
    <div className="card-container">
      {Data.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Container;
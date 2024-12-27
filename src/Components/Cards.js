import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
  return (
    <div className="card">
      {/* to redirect & display the details of the product when clicked on image  */}
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <h3>{item.name}</h3>
      <p>  Rating: {item.rating}</p>
      <p> Category: {item.category}</p>
    </div>
  );
};

export default Cards;
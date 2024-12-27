import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import Cards from './Cards';
import './Cards.css'

const CategoryPage = () => {
  // using category as patameter to retrive data
  const { categoryId } = useParams();
// using filter to get the items belongs to a specific category
  const categoryData = Data.filter((item) => item.category === categoryId);
  const items = categoryData.length ? categoryData : []; 

  return (
    <>
    <h1>{categoryId}</h1>
    <div className="card-container ">
     
        {items.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      </>
  );
};

export default CategoryPage;
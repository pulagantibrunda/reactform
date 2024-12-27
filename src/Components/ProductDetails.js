import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import './ProductDetails.css'

const ProductDetails = () => {
  // Passed id value as parameters to retrieve data
  const { id } = useParams();
  // to find particular products by using id from data
  const product = Data.find((item) => item.id === parseInt(id));

  return (
  
    <div className="container">
      <h2>{product.name}</h2>
      {product.image ? (
        <img src={product.image} alt={product.name} />
      ) : (
        <img src="product.jpg" alt="Product name and features" />

      )}
      <p> Price: 
        {/* used to identify the sale items and display the discount price  */}
        {product.sale ? (
          <span>
            <s>Rs. {product.price}</s>
            <span className="discount-price">Rs. {product.price - (product.price * product.discount / 100)}</span>
          </span>
        ) : (
          <span>Rs. {product.price}</span>
        )} 
        <br />
              {product.sale && (
      // if the item in the data list is eligible for sale then the discount lable will be displayed
        <span className="discount-label">Discount Available!</span>
      )}</p>
      {/* displaying a budget friendly badge for the products under 1000 rupees */}
      {product.price < 1000 && (
        <span className="badge budget-friendly">Budget-Friendly</span>
      )}
      {/* displaying premium product badge for products above 50000 rupees */}
      {product.price > 50000 && (
        <span className="badge premium-product">Premium Product</span>
      )}
      <p>
        {/* Stock related data  */}
        Stock: {product.stock > 0 ? (
          <span className="in-stock">In Stock</span>
        ) : 
        (
          <span className="out-of-stock">Out of Stock</span>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <span className="low-stock-warning">
            Hurry, only {product.stock} items left!
          </span>
        )}
      </p>
      {/* free shipping above rupees 5000 */}
      {product.price > 5000 && (
        <span className="free-shipping">Free Shipping</span>
      )}
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from 'react-router-dom'
import Products from "./Components/Products";
import CategoryPage from "./Components/Category";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      {/* <BrowserRouter basename="/reactform"> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/:categoryId' element={<CategoryPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />

        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
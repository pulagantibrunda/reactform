import React from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

const Home = () => {
  return (
    <>
      <div className='container'>
        <h3>Discover a world of amazing products at unbeatable prices!</h3> 
         <br />
        <Link to="/Products">Products</Link>
        </div>

        

    </>
  )
}

export default Home;
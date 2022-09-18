import React from 'react'
import Navbar from '../components/Navbar'
import Cart from './Cart'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div>
        <Navbar/>
        
        <ProductList/>
        <Cart/>
    </div>
  )
}

export default Home
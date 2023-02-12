import { useState } from "react"
import { priceExport } from "../components/Product"
import ProductList from "../components/ProductList"

const Home = () => {

  return (
    <div>
      <div className="cart-button-content">
        <button className="cart-button">Your Cart</button>
      </div>
      <ProductList />
    </div>
  )
}

export default Home
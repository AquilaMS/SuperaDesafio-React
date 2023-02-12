import Product from "./Product"
import { getAllProducts } from "../logic/products"
import { useState, useEffect } from "react"

const ProductList = (props) => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetch = async () => await getAllProducts().then(res => setProducts(res))
    fetch()
  }, [])

  return (
    <div className="productlist-view">
      {products.map((prod) => (
        <Product key={prod.id_product} price={prod.price} name={prod.name} id={prod.id_product} image={prod.image} />
      ))}
    </div>
  )
}

export default ProductList
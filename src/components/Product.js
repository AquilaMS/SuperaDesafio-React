import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { putToCart } from "../logic/products";
import { changeValue } from "../screens/home";

var priceExport = 0

const Product = ({ name, price, id, image }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    import(`../fake_cdn/assets/${image}`).then(module => {
      setImageUrl(module.default);
    });
  }, [image]);

  const toCart = () => {
    putToCart({ id_product: id }).then(res => {
      toast(`Total price: R$ ${res.total}`)
    })

  }

  return (
    <div className="product-list-main">

      <div className="product-all-content">
        <div className="product-image">
          <img src={imageUrl}></img>
        </div>
        <div className="product-title">
          <div className="set-product-title">{name}</div>
        </div>
        <div className="product-price">
          <div className="set-product-price">R$ {price}</div>
        </div>
        <div className="product-add-cart" onClick={toCart}>
          <div className="set-product-add-cart">Add to Cart</div>
        </div>
      </div>
    </div >
  )
}

export default Product
export { priceExport }
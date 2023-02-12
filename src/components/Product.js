import { useState, useEffect } from "react";

const Product = ({ name, price, id, image }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    import(`../fake_cdn/assets/${image}`).then(module => {
      setImageUrl(module.default);
    });
  }, [image]);
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
        <div className="product-add-cart">
          <div className="set-product-add-cart">Add to Cart</div>
        </div>
      </div>
    </div >
  )
}

export default Product
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addTOBasket = () => {
    dispatch({                    
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        reting: rating
      }
    });
  };

  return (
    <div className="product">
      <div className="poduct_info">
        <p>{title}</p>
        <p className="product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>🌟</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addTOBasket}>Add to cart</button>

    </div>
  );
}

export default Product;

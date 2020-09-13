import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }


    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="CheckoutProduct_info">
                <p className="CheckoutProduct_title">{title}</p>
                <p className="CheckoutProduct_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct_button">Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;

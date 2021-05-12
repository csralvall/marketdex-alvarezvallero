import './CartItem.css';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CartItem = ({ itemId, title, image, quantity, price, removeItem }) => {
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(quantity*price);
  }, [quantity, price]);

  return (
    <li className='cart-item'>
      <img className='cart-item-image' src={image}
        alt=''
        width='180px'
        height='180px' 
      />
      <div className='cart-item-info'>
        <h2 className='cart-item-name'>{title}</h2>
        <p className='cart-item-price'>$ {totalPrice.toFixed(2)}</p>
      </div>
      <div className='cart-item-buttons'>
        <button onClick={removeItem} className='remove-item-button'>
          Remove from cart
        </button>
        <button className='read-item-detail-button'>
          <NavLink
            className='to-item-detail'
            exact to={`item/${itemId}`}>
            Go to item
          </NavLink>
        </button>
        <p className='cart-item-quantity'>{quantity}</p>
      </div>
    </li>
    );
}

import './CartItem.css';

import { PropTypes } from 'prop-types';

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
        <NavLink
          className='to-item-detail'
          exact to={`item/${itemId}`}>
          <button className='read-item-detail-button'>
            Go to item
          </button>
        </NavLink>
        <p className='cart-item-quantity'>{quantity}</p>
      </div>
    </li>
    );
}

CartItem.propTypes = {
  object: PropTypes.exact({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired,
  })
}

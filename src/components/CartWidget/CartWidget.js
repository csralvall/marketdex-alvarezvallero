import './CartWidget.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import marketBag from '../../assets/svg/marketBag.svg';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <NavLink exact to='/cart'
      className={`cart-widget-button ${quantity ? 'with-items' : ''}`} >
      <img
        src={marketBag}
        alt='the cart where your buys are stored'
        width='45em'
        height='45em'
      />
      <svg width='50px' height='50px'>
        <g>
          <circle cx='38' cy='40' r='9'></circle>
          <text fill='white' x='38' y='40' font-size='10'
            text-anchor='middle' alignment-baseline='central'>
            {(quantity < 100) ? quantity : '...'}
          </text>
        </g>
      </svg>
    </NavLink>
  );
}

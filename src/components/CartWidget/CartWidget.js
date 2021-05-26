import './CartWidget.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import marketBag from '../../assets/svg/marketBag.svg';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <NavLink exact to='/cart'
      className='cart-widget-button'>
      <img
        src={marketBag}
        alt='the cart where your buys are stored'
        width='45em'
        height='45em'
      />
      <div className={`${quantity ? 'with-items' : 'without-items'}`}>
        <svg width='50px' height='50px'>
          <g>
            <circle cx='38' cy='40' r='9'></circle>
            <text x='38' y='40' fontSize='13'
              textAnchor='middle' alignmentBaseline='central'>
              {(quantity < 100) ? quantity : '...'}
            </text>
          </g>
        </svg>
      </div>
    </NavLink>
  );
}

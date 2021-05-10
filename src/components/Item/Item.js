import './Item.css';

import { NavLink } from 'react-router-dom';

export const Item = ( { itemId, title, price, image } ) => {
  return (
    <NavLink
      exact to={`/item/${itemId}`}
      className='detail-link'
      activeClassName='active-detail-link'
    >
      <li className='product-item'>
        <h2 className='product-name'>{title}</h2>
        <p className='product-price'>$ {price}</p>
        <img className='product-image' src={image}
          alt=''
          width='180px'
          height='180px' 
        />
      </li>
    </ NavLink>
  );
}

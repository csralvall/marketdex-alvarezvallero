import './Item.css';

import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const Item = ( { itemId, title, price, image, category } ) => {
  return (
    <NavLink
      exact to={`/item/${itemId}`}
      className='detail-link'
      activeClassName='active-detail-link'
    >
      <li className='product-item'>
        <h2 className='product-name'>{title}</h2>
        <h4 className='product-category'>{category}</h4>
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

Item.propTypes = {
  object: PropTypes.exact({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
}

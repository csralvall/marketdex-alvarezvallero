import './ItemDetail.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ title, description, image, price, stock, onBuy}) => {
  const [ quantity, setQuantity ] = useState(0);
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };
  const itemCount = <ItemCount stock={stock} initial={0} onAdd={onAdd} />;
  const finishBuy = (
    <Link to='/cart'>
      <button className='finish-buy' onClick={() => onBuy(quantity)}>
        Finish buy
      </button>
    </Link>
  );

  return (
    <div className='product-detail'>
      <img className='product-detail-image' src={image} alt=''/>
      <div className='product-detail-info'>
        <h2 className='product-detail-name'>{title}</h2>
        <p className='product-detail-price'>$ {price}</p>
        <p className='product-detail-description'>{description}</p>
        <div className='product-detail-cart'>
          {quantity ? finishBuy : itemCount }
        </div>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  onBuy: PropTypes.func,
}

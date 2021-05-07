import './ItemDetail.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ title, description, image, price }) => {
  const [ quantity, setQuantity ] = useState(0);
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };
  const itemCount = <ItemCount stock={5} initial={0} onAdd={onAdd} />;
  const finishBuy = (
    <Link to='/cart'>
      <button className='finish-buy'>Finish buy</button>
    </Link>
  );
  const [ cartButton, setCartButton ] = useState(itemCount);

  useEffect(() => {
    let mounted = true;

    const setButton = () => {
      if(quantity) setCartButton(finishBuy);
    }

    if(mounted) setButton();

    return () => mounted = false;

  }, [quantity])

  return (
    <div className='product-detail'>
      <img className='product-detail-image' src={image} />
      <div className='product-detail-info'>
        <h2 className='product-detail-name'>{title}</h2>
        <p className='product-detail-price'>$ {price}</p>
        <p className='product-detail-description'>{description}</p>
        <div className='product-detail-cart'>{cartButton}</div>
      </div>
    </div>
  );
}

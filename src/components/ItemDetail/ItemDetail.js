import './ItemDetail.css'

import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ title, description, image, price }) => {
  return (
    <div className='product-detail'>
      <img className='product-detail-image' src={image} />
      <div className='product-detail-info'>
        <h2 className='product-detail-name'>{title}</h2>
        <p className='product-detail-price'>$ {price}</p>
        <p className='product-detail-description'>{description}</p>
      <div className='product-detail-count'>
        <ItemCount stock={5} initial={0} />
      </div>
    </div>
    </div>
  );
}

import './ItemList.css';

import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {
  return (
    <ul className='product-list'>
        {products.map((product) => (
          <Item
            key={product.id.toString()}
            itemId={product.id.toString()}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
    </ul>
  );
}

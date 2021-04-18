import './ItemListContainer.css'

import { Item } from '../Item/Item'

export const ItemList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product, id) => (
        <Item
          key={id.toString()}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  );
}

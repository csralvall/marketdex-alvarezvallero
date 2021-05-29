import './ItemList.css';

import { PropTypes } from 'prop-types';

import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {
  return (
    <ul className='product-list'>
        {products.map((product) => (
          <Item
            key={product.id}
            itemId={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
          />
        ))}
    </ul>
  );
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })),
}

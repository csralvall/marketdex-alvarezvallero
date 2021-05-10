import './ItemList.css';

import { PropTypes } from 'prop-types';

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

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })),
}

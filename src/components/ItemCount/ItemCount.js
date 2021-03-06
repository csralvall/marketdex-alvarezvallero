import './ItemCount.css';

import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const ItemCount = ({ stock, initial, onAdd = (a) => console.log(a) }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className='item-selector-cart'>
      <p className='item-stock'>Stock available: {stock}</p>
      <div className='item-count-container'>
        <button className='increment-button' onClick={decrement}>
          −
        </button>
        <p className='item-count-value'>{count}</p>
        <button className='decrement-button' onClick={increment}>
          +
        </button>
      </div>
      <button className='add-to-cart-button' onClick={() => onAdd(count)}>
        Add to cart
      </button>
    </div>
  );
}

ItemCount.propTypes = {
  object: PropTypes.exact({
    stock: PropTypes.number,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
  })
}


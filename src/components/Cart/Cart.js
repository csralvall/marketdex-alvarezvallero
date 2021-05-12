import './Cart.css';

import { useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const { cart, removeFromCart, clear, quantity, cost } = useContext(CartContext);

  const removeItem = (itemId) => removeFromCart(itemId);

  return (
    <Fragment>
      <div className='cart-resume'>
        { quantity ? 
          <Fragment>
            <p>Number of Items: {quantity}</p>
            <p>Total price: {cost.toFixed(2)}</p>
            <button onClick={clear}>Clear cart</button>
          </Fragment> :
          <Fragment>
            <p className='empty-cart-message'>Cart is empty</p>
            <NavLink
              className='root-link' 
              activeClassName='root-link-active'
              exact to='/'>
              Return to products →
            </NavLink>
          </Fragment>
        }
      </div>
      <ul className='cart-list'>
          {cart.map((product) => (
            <CartItem
              key={product.id.toString()}
              itemId={product.id.toString()}
              title={product.title}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              removeItem={() => removeItem(product.id)}
            />
          ))}
      </ul>
    </Fragment>
  );
}

import './Cart.css';

import { useState, useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/app';

import { useModal } from '../../hooks/useModal';

import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { UserForm } from '../UserForm/UserForm';
import { getFirestore } from '../../firebase/firebase';
import { Modal } from '../Modal/Modal';

export const Cart = () => {
  const { cart, removeFromCart, clear, quantity, cost } = useContext(CartContext);
  const {isShowing, toggle} = useModal();
  const [orderId, setOrderId] = useState('');

  const removeItem = (itemId) => removeFromCart(itemId);

  const submitOrder = async (e, buyerData, clearForm) => {
    e.preventDefault();
    const db = getFirestore();
    const orders = db.collection('orders');
    const newOrder = {
      buyer: buyerData,
      items: cart,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: cost,
    };

    try {
      const returnedId = await orders.add(newOrder);
      const batch = db.batch();
      cart.forEach((item) => {
        const itemSelected = db.collection('products').doc(item.id);
        batch.update(itemSelected, { stock: item.stock - item.quantity })
      })
      await batch.commit()
      clear();
      clearForm();
      setOrderId(returnedId.id);
      toggle();
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <div className='cart-view'>
      <div className='cart-resume'>
        { quantity ? 
          <Fragment>
            <p>Number of Items: {quantity}</p>
            <p>Total price: $ {cost.toFixed(2)}</p>
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
      { quantity ? <UserForm onSubmit={submitOrder} /> : null }
      <Modal isShowing={isShowing} hide={toggle}>
        <h2>Order submitted successfully</h2>
        <p>Order ID: <i>{orderId}</i></p>
      </Modal>
    </div>
  );
}

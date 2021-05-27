import './ItemDetailContainer.css';

import { useState, useEffect, useContext, Fragment } from 'react';
import { useParams } from 'react-router';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ResourceNotFound } from '../ResourceNotFound/ResourceNotFound';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/firebase';

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);
  const [isItemAvailable, setIsItemAvailable] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('products');

    const documentReference = itemCollection.doc(itemId);
    const unsuscribe = documentReference.onSnapshot((querySnapshot) => {
      if (querySnapshot.exists) {
        setIsItemAvailable(true);
        setItem(querySnapshot.data());
      } else {
        setIsItemAvailable(false);
      }
    }, (error) => console.error(error));

    return () => unsuscribe();

  }, [itemId]);

  return (
    <Fragment>
    { isItemAvailable ? 
      <ItemDetail
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        stock={item.stock}
        onBuy={(count) => addToCart({...item, quantity: count})}
      />
      :
        <ResourceNotFound> 
          <p className='not-found-message'>We are sorry, item not found.</p>
        </ResourceNotFound> 
      }
    </Fragment>
  );
}

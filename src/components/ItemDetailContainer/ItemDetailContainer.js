import { ItemDetail } from '../ItemDetail/ItemDetail';

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';

import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/firebase';

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('products');

    const unsuscribe = itemCollection.doc(itemId).onSnapshot((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents');
      }
      setItem(querySnapshot.data());
    }, (error) => console.error(error));

    return () => unsuscribe();

  }, [itemId]);

  return (
    <ItemDetail
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      stock={item.stock}
      onBuy={(count) => addToCart({...item, quantity: count})}
    />
  );
}

import './ItemDetailContainer.css';

import { useState, useEffect, useContext, Fragment } from 'react';
import { useParams } from 'react-router';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ResourceNotFound } from '../ResourceNotFound/ResourceNotFound';
import { LoaderAnimation } from '../LoaderAnimation/LoaderAnimation';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/firebase';

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection('products');

    const documentReference = itemCollection.doc(itemId);
    const unsuscribe = documentReference.onSnapshot((querySnapshot) => {
      setItem(querySnapshot);
      setLoading(false);
    }, (error) => console.error(error));

    return () => unsuscribe();

  }, [itemId]);

  const selectView = (item) => {
    let view = (
      <ResourceNotFound> 
        <p className='not-found-message'>We are sorry, item not found.</p>
      </ResourceNotFound> 
    );

    if(item.exists) {
      const product = item.data();
      view = (
        <ItemDetail
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          stock={product.stock}
          onBuy={(count) => addToCart({...product, quantity: count})}
        />
      );
    }

    return view;
  };

  return (
    <Fragment>
      { loading ? <LoaderAnimation /> : selectView(item) }
    </Fragment>
  );
}

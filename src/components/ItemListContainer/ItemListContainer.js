import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { ItemList } from '../ItemList/ItemList';
import { getFirestore } from '../../firebase/firebase';

export const ItemListContainer = ({ categoryId='' }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('products');
    let query;

    if(categoryId === '') {
      query = itemCollection;
    } else {
      query = itemCollection.where('category', '==', categoryId);
    }

    const unsuscribe = query.onSnapshot((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents');
      }
      setItems(querySnapshot.docs.map((doc) => doc.data()));
    }, (error) => console.error(error))

    return () => unsuscribe();

  }, [categoryId]);

  return (
    <ItemList products={items} />
  );
}

ItemListContainer.propTypes = {
  categoryId: PropTypes.string,
}

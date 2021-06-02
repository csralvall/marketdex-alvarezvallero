import { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { ItemList } from '../ItemList/ItemList';
import { LoaderAnimation } from '../LoaderAnimation/LoaderAnimation';
import { ResourceNotFound } from '../ResourceNotFound/ResourceNotFound';
import { getFirestore } from '../../firebase/firebase';

export const ItemListContainer = ({ categoryId='' }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectView = (items) => {
    let view = (
      <ResourceNotFound> 
        <p className='not-found-message'>We are sorry, category not found.</p>
      </ResourceNotFound> 
    );

    if(items.length) {
      view = (<ItemList products={items} />);
    }

    return view
  }

  useEffect(() => {
    setLoading(true);
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
      } else {
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      }
      setLoading(false);
    }, (error) => console.error(error))

    return () => unsuscribe();

  }, [categoryId]);

  return (
    <Fragment>
      { loading ? <LoaderAnimation /> : selectView(items) }
    </Fragment>
  );
}

ItemListContainer.propTypes = {
  object: PropTypes.shape({
    categoryId: PropTypes.string,
  }),
}

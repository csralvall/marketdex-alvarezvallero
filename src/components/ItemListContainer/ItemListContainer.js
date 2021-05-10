import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { ItemList } from '../ItemList/ItemList';
import { useFetch } from '../../hooks/useFetch';

export const ItemListContainer = ({ extraPath='' }) => {
  const [url, setUrl] = useState(`https://fakestoreapi.com/products/${extraPath}`);
  const items = useFetch(url, [])['data'];

  useEffect(() => {
    setUrl(`https://fakestoreapi.com/products/${extraPath}`);
  }, [extraPath]);

  return (
    <ItemList products={items} />
  );
}

ItemListContainer.propTypes = {
  extraPath: PropTypes.string,
}

import { useState, useEffect } from 'react';

import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = ({ extraPath='' }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true;
    const fetchItems = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${extraPath}`);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedItems = await response.json()
        setItems(fetchedItems);
      }
    }

    if(mounted) fetchItems();

    return () => mounted = false;

	}, [extraPath])


  return (
    <ItemList products={items} />
  );
}

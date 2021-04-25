import { useState, useEffect } from 'react';

import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedItems = await response.json()
        setItems(fetchedItems);
      }
    }
    fetchItems();
	}, [])


  return (
    <ItemList products={items} />
  );
}

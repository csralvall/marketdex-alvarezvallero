import { ItemDetail } from '../ItemDetail/ItemDetail'

import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('https://fakestoreapi.com/products/4');
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedItem = await response.json()
        setItem(fetchedItem);
      }
    }
    fetchItem();
	}, [])


  return (
    <ItemDetail
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
    />
  );
}

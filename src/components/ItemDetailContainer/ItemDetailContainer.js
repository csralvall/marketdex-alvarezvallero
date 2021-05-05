import { ItemDetail } from '../ItemDetail/ItemDetail'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
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
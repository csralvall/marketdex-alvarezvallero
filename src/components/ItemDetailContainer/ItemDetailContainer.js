import { ItemDetail } from '../ItemDetail/ItemDetail'

import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../../context/CartContext'

export const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([])

  useEffect(() => {
    let mounted = true;
    const fetchItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedItem = await response.json()
        setItem(fetchedItem);
      }
    }
    if(mounted) fetchItem();

    return () => mounted = false;

	}, [itemId])


  return (
    <ItemDetail
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      onBuy={(count) => addToCart({...item, quantity: count})}
    />
  );
}

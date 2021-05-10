import { ItemDetail } from '../ItemDetail/ItemDetail';

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';

import { useFetch } from '../../hooks/useFetch';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [url, setUrl] = useState(`https://fakestoreapi.com/products/${itemId}`);
  const item = useFetch(url, [])['data'];

  useEffect(() => {
    setUrl(`https://fakestoreapi.com/products/${itemId}`);
  }, [itemId]);

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

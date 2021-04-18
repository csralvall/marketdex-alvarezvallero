import './Item.css'

export const Item = ( { title, price, description } ) => {
  return (
    <li className="product-item">
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </li>
  );
}

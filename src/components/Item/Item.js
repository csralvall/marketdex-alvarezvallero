import './Item.css'

export const Item = ( { title, price, description, image } ) => {
  console.log(image);
  return (
    <li className='product-item'>
      <h2 className='product-name'>{title}</h2>
      <p className='product-price'>{price}</p>
      <img className='product-image' src={image}
        width="180px"
        height="180px" 
      />
    </li>
  );
}

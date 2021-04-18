import './CartWidget.css'

import marketBag from '../../img/svg/marketBag.svg'

export const CartWidget = () => {
  const cartWidgetAlert = () => alert("Aca van tus compras!!");

  return (
    <button onClick={cartWidgetAlert} type="button" className="cart-widget-button">
      <img
        src={marketBag}
        width="45em"
        height="45em"
      />
    </button>
  );
}

import './NavBar.css';

import ecommerceLogo from '../../img/png/ecommerce_logo.png'

import { NavMenu } from '../NavMenu/NavMenu'
import { NavSearch } from '../NavSearch/NavSearch'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <header className="nav-bar">
      <img
        src={ecommerceLogo}
        width="180px"
        height="50px" 
      />
      <NavSearch />
      <NavMenu />
      <CartWidget />
    </header>
  );
}
 

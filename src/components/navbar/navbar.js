import './navbar.css';
import ecommerceLogo from '../../img/png/ecommerce_logo.png'

import { NavMenu } from '../navmenu/navmenu'
import { NavSearch } from '../navsearch/navsearch'

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
    </header>
  );
}
 

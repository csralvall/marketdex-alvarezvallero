import './navbar.css';

import { NavMenu } from '../navmenu/navmenu'

export const NavBar = () => {
  return (
    <header className="nav-bar">
      <p>
        Market Dex
      </p>
      <NavMenu />
    </header>
  );
}
 

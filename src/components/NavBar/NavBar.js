import './NavBar.css';

import ecommerceLogo from '../../assets/png/ecommerce_logo.png';

import { Link } from 'react-router-dom';

import { NavMenu } from '../NavMenu/NavMenu';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <header className='nav-bar'>
      <NavMenu />
      <Link to='/'>
        <button className='logo-button'>
          <img
            src={ecommerceLogo}
            alt='commercial logotype'
            width='180px'
            height='50px' 
          />
        </button>
      </Link>
      <CartWidget />
    </header>
  );
}
 

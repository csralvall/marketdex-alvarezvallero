import './NavBar.css';

import ecommerceLogo from '../../assets/png/ecommerce_logo.png';

import { Link } from 'react-router-dom';

import { NavMenu } from '../NavMenu/NavMenu';
import { NavSearch } from '../NavSearch/NavSearch';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <header className='nav-bar'>
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
      <NavSearch />
      <NavMenu />
      <CartWidget />
    </header>
  );
}
 

import './NavMenu.css';

import { DropDown } from '../DropDown/DropDown';
import { useFetch } from '../../hooks/useFetch';

import { Link } from 'react-router-dom';

export const NavMenu = () => {
  const url = 'https://fakestoreapi.com/products/categories';
  const categories = useFetch(url, [])['data'];

  return (
    <nav className='nav-menu'>
      <ul className='nav-menu-list'>
        <li className='categories'>
          <Link to=''>Categories</Link>
          <DropDown className='menu-entries'
                    path='category'
                    entries={categories}/>
        </li>
        <li className='nav-menu-item'>
          <Link to='/offers'>Offers</Link>
        </li>
        <li className='nav-menu-item'>
          <Link to='/history'>History</Link>
        </li>
        <li className='nav-menu-item'>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
    </nav>
  );
}

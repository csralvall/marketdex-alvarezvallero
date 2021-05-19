import './NavMenu.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DropDown } from '../DropDown/DropDown';
import { getFirestore } from '../../firebase/firebase';

export const NavMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('products');

    itemCollection.onSnapshot((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents');
      }
      setCategories(
        [...new Set(querySnapshot.docs.map((doc) => doc.get('category')))]
      );
    }, (error) => console.error(error))

  }, []);

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

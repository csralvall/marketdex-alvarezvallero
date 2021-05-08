import './NavMenu.css'

import { DropDown } from '../DropDown/DropDown'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const NavMenu = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedCategories = await response.json()
        setCategories(fetchedCategories);
      }
    }
    fetchCategories();
	}, [])

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

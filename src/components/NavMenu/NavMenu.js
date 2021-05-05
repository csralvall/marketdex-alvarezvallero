import './NavMenu.css'

import { DropDown } from '../DropDown/DropDown'

import { useState, useEffect } from 'react'

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
          <a href=''>Categories</a>
          <DropDown className='menu-entries'
                    path='category'
                    entries={categories}/>
        </li>
        <li className='nav-menu-item'>
          <a href=''>Offers</a>
        </li>
        <li className='nav-menu-item'>
          <a href=''>History</a>
        </li>
        <li className='nav-menu-item'>
          <a href=''>Help</a>
        </li>
      </ul>
    </nav>
  );
}

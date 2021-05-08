import './NavSearch.css'

import magnifyingGlass from '../../assets/png/magnifying-glass-search.png'

export const NavSearch = () => {
  return (
    <form className='nav-search'>
      <input
        type='text'
        className='nav-search-input'
        placeholder='Search'
        maxLength='80'
      ></input>
      <button type='submit' className='nav-search-button'>
        <img
					src={magnifyingGlass}
          alt='button to trigger search'
				/>
      </button>
    </form>
  );
}

import './NavSearch.css'

import magnifyingGlass from '../../img/png/magnifying-glass-search.png'

export const NavSearch = () => {
  return (
    <form className="nav-search">
      <input
        type="text"
        className="nav-search-input"
        placeholder="Busca todo lo que necesitas..."
        maxLength="80"
      ></input>
      <button type="submit" className="nav-search-button">
        <img
					src={magnifyingGlass}
				/>
      </button>
    </form>
  );
}

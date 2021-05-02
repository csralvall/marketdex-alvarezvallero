import './NavMenu.css'

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
        <li className="nav-menu-item">
          <a href=''>Categories</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>Offers</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>History</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>Help</a>
        </li>
      </ul>
    </nav>
  );
}

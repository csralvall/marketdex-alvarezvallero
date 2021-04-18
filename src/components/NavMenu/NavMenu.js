import './NavMenu.css'

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
        <li className="nav-menu-item">
          <a href=''>Categorias</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>Ofertas</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>Historial</a>
        </li>
        <li className="nav-menu-item">
          <a href=''>Ayuda</a>
        </li>
      </ul>
    </nav>
  );
}

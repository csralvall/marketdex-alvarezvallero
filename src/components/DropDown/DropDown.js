import './DropDown.css'

import { NavLink } from 'react-router-dom'

export const DropDown = ({ className, path, entries }) => {
  return (
    <div className={className}>
        {entries.map((entry) => (
          <NavLink
            exact to={`/${path}/${entry}`}
            activeClassName='active-entry-name'
            className='entry-name'>
            {entry}
          </NavLink>
        ))}
    </div>
  );
}

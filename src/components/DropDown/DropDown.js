import './DropDown.css';

import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const DropDown = ({ className, path, entries }) => {
  return (
    <div className={className}>
        {entries.map((entry) => (
          <NavLink
            key={entry} // TODO add unique key identifier
            exact to={`/${path}/${entry}`}
            activeClassName='active-entry-name'
            className='entry-name'>
            {entry}
          </NavLink>
        ))}
    </div>
  );
}

DropDown.propTypes = {
  object: PropTypes.exact({
    className: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
}

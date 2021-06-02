import './ResourceNotFound.css';

import { PropTypes } from 'prop-types';

import questionMark from '../../assets/svg/questionMark.svg';

export const ResourceNotFound = ({ children }) => {
  return (
    <div className='not-found-view'>
      <img className='question-mark-svg' alt='' src={questionMark}></img>
      {children}
    </div>
  );
}

ResourceNotFound.propTypes = {
  object: PropTypes.shape({
    children: PropTypes.element,
  }),
}

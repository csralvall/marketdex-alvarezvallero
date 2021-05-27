import './ResourceNotFound.css';

import questionMark from '../../assets/svg/questionMark.svg';

export const ResourceNotFound = ({ children }) => {
  return (
    <div className='not-found-view'>
      <img className='question-mark-svg' alt='' src={questionMark}></img>
      {children}
    </div>
  );
}

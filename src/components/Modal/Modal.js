import './Modal.css';

import { createPortal } from 'react-dom';

export const Modal = ({ children, isShowing, hide }) => (
  isShowing ? createPortal(
    <div className='modal-overlay'>
      <div
					className='modal-wrapper'
					aria-modal
					aria-hidden
					tabIndex={-1}
					role='dialog'
			>
        <div className='modal'>
          {children}
          <button
            type='button'
            className='modal-close-button'
            data-dismiss='modal'
            aria-label='close'
            onClick={hide}
          >
            Close
          </button>
        </div>
      </div>
    </div>, document.body
  ) : null
);

import './Input.css';

import { PropTypes } from 'prop-types';

export const Input = ({ id, label, value, validation, required, onChange }) => {
  return (
    <div className='input'>
      <label className='label'>{label}{required && <small>*</small>}</label>
      <input
        type='text'
        onChange = {({ target }) => onChange(id, target.value)}
        value={value}
        pattern={validation}
      />
    </div>
  );
}

Input.propTypes = {
  object: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    validation: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
}

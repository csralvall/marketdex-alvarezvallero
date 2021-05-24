import './Input.css';

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

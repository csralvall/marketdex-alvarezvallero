import './Input.css';

export const Input = ({ id, label, value, onChange }) => {
  return (
    <div className='input'>
      <label className='label'>{label}</label>
      <input
        type='text'
        onChange = {({ target }) => onChange(id, target.value)}
        value={value}
      />
    </div>
  );
}

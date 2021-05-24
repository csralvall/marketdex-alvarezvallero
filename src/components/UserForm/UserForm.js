import './UserForm.css';
import { useState, useEffect } from 'react';

import { Input } from '../Input/Input';

export const UserForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formFields = [
    {
      id:'name',
      label: 'Name',
      value: form.name,
      validation: "^[a-zA-Z ,.'-]+$",
      required: true,
    },
    {
      id:'phone',
      label: 'Phone',
      value: form.phone,
      validation: "^[0-9]{7,25}$",
      required: true,
    },
    {
      id:'email',
      label: 'Email',
      value: form.email,
      validation: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[.]{1}[a-zA-Z0-9-]{2,3})*$",
      required: true,
    },
  ];

  const requiredFields = formFields.filter(({ required }) => required);

  const submitData = (e) => {
    const resetState = () => setForm({ name: '', phone: '', email: '' });
    onSubmit(e, form, resetState);
  };

  const handleForm = (id, value) => {
    const newForm = { ...form, [id]: value };
    setForm(newForm);
  };
  
  useEffect(() => {
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value )
    setIsButtonDisabled(isSomeRequiredFieldEmpty);
  }, [requiredFields]);

  return (
    <form className='user-form' onSubmit={(e) => submitData(e)}>
      <div className='fields'>
        {formFields.map(({ id, label, value, validation, required }) => (
          <Input
            key={id}
            id={id}
            label={label}
            value={value}
						validation={validation}
						required={required}
            onChange={handleForm} />
        ))}
      </div>
      <button disabled={isButtonDisabled} type='submit'>
        Create Order
      </ button>
      { requiredFields.length ? 
        <footer className='required-anotation'>
          * required fields
        </footer>
      : null }
    </form>
  );
}

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
      required: true,
    },
    {
      id:'phone',
      label: 'Phone',
      value: form.phone,
      required: true,
    },
    {
      id:'email',
      label: 'Email',
      value: form.email,
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
        {formFields.map(({ id, label, value }) => (
          <Input
            key={id}
            id={id}
            label={label}
            value={value}
            onChange={handleForm} />
        ))}
      </div>
      <button disabled={isButtonDisabled} type='submit'>
        Create Order
      </ button>
    </form>
  );
}

import './UserForm.css';
import { useState, useEffect, Fragment } from 'react';

import { Input } from '../Input/Input';

export const UserForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const formFields = [
    {
      id:'name',
      label: 'Name',
      value: form.name,
      validation: "^[a-zA-Z ,.'-]+$",
      required: true,
      confirm: false,
    },
    {
      id:'phone',
      label: 'Phone',
      value: form.phone,
      validation: "^[0-9]{7,25}$",
      required: true,
      confirm: false,
    },
    {
      id:'email',
      label: 'Email',
      value: form.email,
      validation: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[.]{1}[a-zA-Z0-9-]{2,3})*$",
      required: true,
      confirm: true,
    },
  ];

  const requiredFields = formFields.filter(({ required }) => required);

  const submitData = (e) => {
    const resetState = () => setForm({ name: '', phone: '', email: '' });
    onSubmit(e, form, resetState);
    setIsOrderSubmitted(true);
  };

  const handleForm = (id, value) => {
    const newForm = { ...form, [id]: value };
    setForm(newForm);
  };

  const handleConfirmation = (id, value) => {
    (form[id] !== value) ? setIsConfirmed(false) : setIsConfirmed(true);
  }

  const setInput = ({id, label, value, validation, required, onChange}) => (
    <Input
      key={id}
      id={id}
      label={label}
      value={value}
      validation={validation}
      required={required}
      onChange={onChange} />
  );

  const setConfirmInput = (prefix, {id, label, validation, required, onChange}) => {
    const newLabel = (
      `${prefix[0].toUpperCase()}${prefix.substring(1)} ${label}`
    );
    return (
      <Input
        key={prefix+id}
        id={id}
        label={newLabel}
        validation={validation}
        required={required}
        onChange={onChange} />
    );
  };
  
  useEffect(() => {
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value )
    setIsButtonDisabled(
      isSomeRequiredFieldEmpty || !isConfirmed || isOrderSubmitted
    );
  }, [requiredFields, isConfirmed, isOrderSubmitted]);

  return (
    <form className='user-form' onSubmit={(e) => submitData(e)}>
      <div className='fields'>
        {formFields.map(({confirm, ...input }) => {
          const fields = [setInput({onChange: handleForm, ...input})]
          if (confirm) {
            const confirmInput = {...input , onChange: handleConfirmation};
            fields.push(setConfirmInput('confirm', confirmInput));
          }
          return fields;
        })}
      </div>
      <button disabled={isButtonDisabled} type='submit'>
        { isOrderSubmitted ? 'Submitting order...' : 'Create Order' }
      </button>
      { requiredFields.length ? 
        <footer className='required-anotation'>
          * required fields
        </footer>
        : <Fragment></Fragment> }
    </form>
  );
}

import './UserForm.css';

import { PropTypes } from 'prop-types';
import { useState, useEffect, Fragment } from 'react';

import { Input } from '../Input/Input';

export const UserForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    surname: '',
  });
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
      id:'surname',
      label: 'Surname',
      value: form.surname,
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
  const [confirmationForm, setConfirmationForm] = useState(
    Object.fromEntries(
      formFields.filter(({ confirm }) => confirm).map(({id}) => [id, ''])
    )
  );

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
    const newForm = {...form, [id]: value };
    setConfirmationForm(newForm);
  }

  const setInput = ({key, id, label, value, validation, required, onChange}) => (
    <Input
      key={key}
      id={id}
      label={label}
      value={value}
      validation={validation}
      required={required}
      onChange={onChange} />
  );

  useEffect(() => {
    for (const id in confirmationForm) {
      if (form[id] !== confirmationForm[id]) {
        setIsConfirmed(false);
      } else {
        setIsConfirmed(true)
      };
    }
  }, [form, confirmationForm]);

  useEffect(() => {
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value )
    setIsButtonDisabled(
      isSomeRequiredFieldEmpty || !isConfirmed || isOrderSubmitted
    );
  }, [requiredFields, isConfirmed, isOrderSubmitted]);

  return (
    <form className='user-form' onSubmit={(e) => submitData(e)}>
      <div className='fields'>
        {formFields.map(({confirm, id, label, ...input }) => {
          const fields = [setInput(
            {onChange: handleForm, key: id, id, label, ...input}
          )]
          if (confirm) {
            const confirmInput = {
              ...input,
              key: 'confirm'+id,
              label: 'Confirm '+label,
              id,
              value: confirmationForm[id],
              onChange: handleConfirmation,
            };
            fields.push(setInput(confirmInput));
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

UserForm.propTypes = {
  object: PropTypes.shape({
    onSubmit: PropTypes.func.isRequired,
  }),
}

import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, FormButton, Label } from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from "redux/contacts/contact-slice";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contact-slice";

export default function ContactForm() {
 const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const checkContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkContact
      ? alert(`${name} is already in contact`)
      : dispatch(addContact(contact));

    reset();
  };


  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name:
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          placeholder="459-12-56"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

ContactForm.prototypes = {
  onSubmit: PropTypes.func.isRequired,
};

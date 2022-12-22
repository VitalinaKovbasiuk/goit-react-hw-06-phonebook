import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';


// import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-selectors';
// import { getFilter } from 'redux/filter/filter-selectors';
// import { addContact, removeContact } from 'redux/contacts/contact-slice';
// import { setFilter } from 'redux/filter/filter-slice';

export default function App() {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const onAddContact = contact => {
  //   if (isDuplicate(contact)) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   const action = addContact(contact);
  //   dispatch(action);
  // };

  // const onRemoveContact = id => {
  // const action = removeContact(id);
  //   dispatch(action);
  // };

  // const handleChange = e => {
  //   const { value } = e.currentTarget;
  //   dispatch(setFilter(value));
  // };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   const filterContacts = contacts.filter(({ name }) => {
  //     const normalizeName = name.toLocaleLowerCase();
  //     const result = normalizeName.includes(normalizeFilter);
  //     return result;
  //   });
  //   return filterContacts;
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <Section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section>
  );
}

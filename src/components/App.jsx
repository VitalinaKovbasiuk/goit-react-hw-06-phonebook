import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Section } from './App.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contact-slice';
import { setFilter } from 'redux/filter/filter-slice';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);


// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     return (
//       contacts ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     );
//   });

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   useEffect(() => {
//     return () => {
//       localStorage.removeItem('contacts');
//     };
//   }, []);

  const onAddContact = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const onRemoveContact = id => {
  const action = removeContact(id);
    dispatch(action);
  };
  //   setContacts(prev => {
  //     const newContacts = prev.filter(item => item.id !== id);
  //     return newContacts;
  //   });
  // };

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) => {
      const normalizeName = name.toLocaleLowerCase();
      const result = normalizeName.includes(normalizeFilter);
      return result;
    });
    return filterContacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <h2>Contacts</h2>
        <Filter value="filter" onChange={handleChange} />
        <ContactList items={filteredContacts} removeContact={onRemoveContact} />
      </div>
    </Section>
  );
}

import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import { Section } from './App.styled';


export default function App() {

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

import React from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const App = () => {
  const filterText = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in your contacts.`)
      : dispatch(addContact({ name, number, id: nanoid() }));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} />

        <h2 className={css.contactListTitle}>Contacts</h2>

        <Filter />
        <ContactList contactList={getVisibleContacts()} />
      </div>
    </div>
  );
};

export default App;

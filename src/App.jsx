import { useState } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import './App.css';

export function App() {
  const [nameFilter, setNameFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const visibleUsers = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={nameFilter} onChange={setNameFilter} />
        <ContactList contacts={visibleUsers} onDelete={deleteContact} />
      </div>
    </>
  );
}

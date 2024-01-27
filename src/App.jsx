import { useState, useEffect } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import './App.css';

export function App() {
  const [nameFilter, setNameFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );

  const visibleUsers = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const addContact = newContact => {
    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number,
    );
    // Якщо контакт існує, виводимо повідомлення про помилку
    if (contactExists) {
      alert('Contact with the same name or number already exists.');
    } else {
      // Якщо контакт не існує, додаємо його до масиву
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

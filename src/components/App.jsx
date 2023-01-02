import ContactForm from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useState } from 'react';
export default function App() {
  const [filter, setFilter] = useState('');
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
      <h1>Phonebook</h1>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter saveFilter={setFilter} />
      <Contacts filter={filter} />

    </div>
  );
}


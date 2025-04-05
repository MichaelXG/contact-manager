import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (index, updated) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updated;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <h1>📇 Gerenciador de Contatos</h1>

      <ContactForm onAdd={addContact} />

      <div className="contact-list">
        <ContactList
          contacts={contacts}
          onUpdate={updateContact}
          onDelete={deleteContact}
        />
      </div>
    </div>
  );
}

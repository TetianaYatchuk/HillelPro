import React, { useState } from "react";
import "./App.css"
import { contactsList } from "./data"
import Contacts from "./components/contacts";
import { ButtonDelete, ButtonAddContact } from "./components/button/Button";
import { ContactForm } from "./components/form/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [contactList, setContactList] = useState(contactsList);

  const deleteContact = (contactId) => {
    const updatedContacts = contactList.filter(contact => contact.id !== contactId);
    setContactList(updatedContacts);
  };

  const addContact = (newContact) => {
    setContactList(prevContacts => [...prevContacts, { id: prevContacts.length + 1, ...newContact }]);
  };

  return (
    <div>
      <h2>Contact list</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(contact => (
            <tr key={contact.id}>
              <Contacts {...contact} />
              <ButtonDelete deleteContact={deleteContact} contactId={contact.id} />
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonAddContact setShowForm={setShowForm} />
      {showForm && (
        <ContactForm addContact={addContact} setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default App;

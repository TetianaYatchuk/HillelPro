import React, { useState } from "react";

export function ContactForm({ addContact, setShowForm }) {
  const [newContact, setNewContact] = useState({
    name: "",
    username: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        User name:
        <input
          type="text"
          name="username"
          value={newContact.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={newContact.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </label>
    </form>
  );
}

import React from "react";

export function ButtonDelete({ deleteContact, contactId }) {
  return (
    <td>
      <button onClick={() => deleteContact(contactId)}>
        Delete
      </button>
    </td>
  );
}

export function ButtonAddContact({ setShowForm }) {
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add contact</button>
    </div>
  );
}

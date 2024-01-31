import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    const { newContact, handleChange, handleSubmit, setShowForm } = this.props;

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
          <button type="button" onClick={setShowForm}>
            Cancel
          </button>
        </label>
      </form>
    );
  }
}

export default ContactForm;
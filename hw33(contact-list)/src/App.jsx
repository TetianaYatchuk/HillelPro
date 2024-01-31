import React, { Component } from "react";
import "./App.css";
import { contactsList } from "./data";
import ContactsRow from "./components/contacts/Contacts";
import ButtonDelete from "./components/button/ButtonDel";
import ButtonAddContact from "./components/button/ButtonAdd";
import ContactForm from "./components/form/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      contactList: contactsList,
      newContact: {
        name: "",
        username: "",
        phone: "",
      },
    };
  }

  deleteContact = (contactId) => {
    const updatedContacts = this.state.contactList.filter(
      (contact) => contact.id !== contactId
    );
    this.setState({ contactList: updatedContacts });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newContact: { ...prevState.newContact, [name]: value },
    }));
  };

  addContact = () => {
    this.setState((prevState) => ({
      contactList: [
        ...prevState.contactList,
        {
          id: prevState.contactList.length + 1,
          ...prevState.newContact,
        },
      ],
      newContact: {
        name: "",
        username: "",
        phone: "",
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addContact();
    this.setState({ showForm: false });
  };

  render() {
    const { showForm, contactList, newContact } = this.state;

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
            {contactList.map((contact) => (
              <tr key={contact.id}>
                <ContactsRow {...contact} />
                <ButtonDelete
                  deleteContact={this.deleteContact}
                  contactId={contact.id}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <ButtonAddContact
          setShowForm={() => this.setState({ showForm: true })}
        />
        {showForm && (
          <ContactForm
            newContact={newContact}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            setShowForm={() => this.setState({ showForm: false })}
          />
        )}
      </div>
    );
  }
}

export default App;

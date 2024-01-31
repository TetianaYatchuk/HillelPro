import React, { Component } from "react";

class ButtonDelete extends Component {
  render() {
    const { deleteContact, contactId } = this.props;

    return (
      <td>
        <button onClick={() => deleteContact(contactId)}>
          Delete
        </button>
      </td>
    );
  }
}

export default ButtonDelete;
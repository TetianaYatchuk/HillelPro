import React, { Component } from "react";

class ButtonAddContact extends Component {
  render() {
    const { setShowForm } = this.props;

    return (
      <div>
        <button onClick={() => setShowForm(true)}>Add contact</button>
      </div>
    );
  }
}

export default ButtonAddContact;
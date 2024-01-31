import React from "react";

const Contacts = ({ name, username, phone }) => {
  return (
    <>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
    </>
  );
};

export default Contacts;
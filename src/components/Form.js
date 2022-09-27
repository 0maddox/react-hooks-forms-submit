import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
 
  const handleSubmit = function handleSubmit(e){
    e.preventDefault();
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

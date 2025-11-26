import React, { useState } from 'react'

export default function Form() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  let handleInputChange = (event) =>  {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      // return {...currData}; // we need change whole obj to reflect new changes 

      return {...currData, [fieldName]: newValue};
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    useState({
    name: "",
    email: "",
  });
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id='name' placeholder='enter name' value={formData.name} onChange={handleInputChange} name='name' />
        <br /><br />

        <label htmlFor="email">Email: </label>
        <input type="email" id='email' placeholder='enter email' value={formData.email} onChange={handleInputChange} name='email'/>
        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  )
}

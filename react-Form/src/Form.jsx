import React, { useState } from 'react'

export default function Form() {
  let [name, setName] = useState("");
  let handleName = (event) =>  {
    setName(event.target.value);
  }
  return (
    <div>
      <form action="#">
        <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder='enter name' value={name} onChange={handleName} />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

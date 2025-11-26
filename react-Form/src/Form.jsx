import React, { useState } from 'react'

export default function Form() {
  let [name, setName] = useState("");
  let handleName = (event) =>  {
    setName(event.target.value);
  }
  return (
    <div>
      <form action="#">
        <input type="text" placeholder='enter name' value={name} onChange={handleName} />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

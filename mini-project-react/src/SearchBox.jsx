import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"


export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  }

  return (
    <div className='SearchBox'>
      <h1>Search for the weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          required
          id="City"
          label="City Name"
          value={city}
          onChange={handleChange}
        />

        <br /><br />

      <Button variant="contained" type='submit'>
        Search
      </Button>
      </form>
    </div>
  )
}


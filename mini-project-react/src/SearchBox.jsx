import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"



export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      feelsLike: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };

    console.log(result);
  };


  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
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


import React from 'react';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';



var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }

function Form(){
    return (
        <>
            <header>
                <h1>Weather App</h1>
            </header>
            
            <form>
                <label>
                    Street Adress:
                    <input type="text" name="addy" />
                </label><br/>
                <label>
                    City Name:
                    <input type="text" name="cityName" />
                </label><br/>
                <label>
                    ZIP Code:
                    <input type="text" name="zip" />
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        <p>OR</p>
        <button>Current Location</button>
        <button onclick="getLocation()">Try It</button>
        <p id="demo"></p>
        </>
    );
};

export default Form;
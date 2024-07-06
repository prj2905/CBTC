import React, { useRef } from 'react'
import clear_icon from "../components/Assets/clear.png"
import cloud_icon from "../components/Assets/cloud.png"
import drizzle_icon from "../components/Assets/drizzle.png"
import humidity_icon from "../components/Assets/humidity.png"
import rain_icon from "../components/Assets/rain.png"
import snow_icon from "../components/Assets/snow.png"
import wind_icon from "../components/Assets/wind.png"
import search_icon from "./Assets/search.png"




import { useState, useEffect } from 'react'

export const Weather = () => {
   const [weatherData, setWeatherData] = useState(false)

   const inputRef = useRef()

   const allIcons = {
      "01d": clear_icon,
      "01n": clear_icon,
      "02d": cloud_icon,
      "02n": cloud_icon,
      "03d": cloud_icon,
      "03n": cloud_icon,
      "04d": drizzle_icon,
      "04n": drizzle_icon,
      "09d": rain_icon,
      "09n": rain_icon,
      "10d": rain_icon,
      "10n": rain_icon,
      "13d": snow_icon,
      "13n": snow_icon,

   }

   const search = async (city) => {
      try {
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2791fe0a68dc7bef44e4fbbf4d42f9b0`
         const response = await fetch(url)
         const data = await response.json()
         console.log(data)
         const icon = allIcons[data.weather[0].icon] || clear_icon 
         setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon


         })
      } catch (error) {

      }

   }

   useEffect(() => {
      search("London")
   }, [])





   return (
      <div className='container'>
         <div className='search-bar'>
            <input type="text" placeholder='Search for city' ref={inputRef} />

            <button><img src={search_icon} onClick={() => search(inputRef.current.value)}></img></button>
         </div>
         <div className="main">
            <img className='weather-img' src={weatherData.icon}></img>
            <p className='temperature'>{weatherData.temperature}°c</p>
            <p className='location'>{weatherData.location}</p>

         </div>
         <div className="components">
            <div className="humidity">
               <img src={humidity_icon} width="70" alt="" />
               <div className="text"><p>{weatherData.humidity}%</p>
                  <p>Humidity</p>
               </div>
            </div>
            <div className="humidity">
               <img src={wind_icon} width="70" alt="" />
               <div className="text">
                  <p>{weatherData.windSpeed} km/h</p>
                  <p>Wind speed</p>
               </div>
            </div>
         </div>
      </div>
   )
}

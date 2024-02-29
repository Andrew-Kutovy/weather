import React, {FC, useEffect, useState} from 'react';
import style from './WeatherForDay.module.css'
import {IWeather} from "../../../interfaces/weatherInterface";
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from './WeatherForDay';


const WeatherContainer  = () => {
    const [weatherData, setWeatherData] = useState<IWeather | null>(null);


    return (
        <>
            {weatherData ? (
                <div className={style.Container}>
                    {weatherData.days.map((day, index) => (

                        <WeatherForDay key={index} day={day} />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default WeatherContainer;

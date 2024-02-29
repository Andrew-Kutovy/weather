import React, { useEffect, useState } from 'react';
import style from '../Main.module.css'
import {IWeather} from "../../../interfaces/weatherInterface";
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from './WeatherForDay';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    // useEffect(() => {
    //     weatherService.home().then(({data}) => setWeatherData(data))
    // }, []);

    useEffect(() => {
        weatherService.addNew("Berlin", "2024-03-03", "2024-03-14").then(({data}) => setWeatherData(data))
    }, []);


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

export default WeatherComponent;

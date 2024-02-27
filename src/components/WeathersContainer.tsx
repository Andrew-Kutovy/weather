import React, { useEffect, useState } from 'react';
import WeatherForDay from "./WeatherForDay";
import {IWeather} from "../interfaces/weatherInterface";
import {weatherService} from "../services/weatherService";

const WeatherComponent = () => {


    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    useEffect(() => {
        weatherService.home().then(({data})=>setWeatherData(data))
    }, []);

    return (
        <div>
            {weatherData ? (
                <div>
                    {weatherData.days.map((day, index) => <WeatherForDay key={index} day={day}/>)}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WeatherComponent;

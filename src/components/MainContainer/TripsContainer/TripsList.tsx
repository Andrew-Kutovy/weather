import React, {useEffect, useState} from 'react';
import {IWeather} from "../../../interfaces/weatherInterface";
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from "../WeatherContainer/WeatherForDay";

const TripsList = () => {


    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    useEffect(() => {
        weatherService.home().then(({data}) => setWeatherData(data))
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
}

export default TripsList;
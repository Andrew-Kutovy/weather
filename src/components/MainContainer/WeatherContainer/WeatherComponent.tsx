import React, {FC, useEffect, useState} from 'react';
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from "./WeatherForDay";
import {IWeather} from "../../../interfaces/weatherInterface";

interface IProps {
    city: string;
    startDate: string;
    endDate: string
}
const WeatherComponent: FC<IProps> = ({ city, startDate, endDate }) => {
    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    useEffect(() => {
        weatherService.addNew(city, startDate, endDate).then(({ data }) => setWeatherData(data));
    }, [city, startDate, endDate]);

    return (
        <>
            {weatherData ? (
                <div>
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
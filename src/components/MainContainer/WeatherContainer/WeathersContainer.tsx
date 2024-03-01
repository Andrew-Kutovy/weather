import React, {FC, useEffect, useState} from 'react';
import style from './WeatherForDay.module.css'
import {IWeather} from "../../../interfaces/weatherInterface";
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from './WeatherForDay';
import {useTripContext} from "../../../providers/tripProvider";


const WeatherContainer  = () => {
    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    const {selectedTrip} = useTripContext()

    useEffect(() => {
        if (selectedTrip) {
            weatherService.addNew(selectedTrip.city, selectedTrip.startDate, selectedTrip.endDate).then(({ data }) => setWeatherData(data));
        }
    }, [selectedTrip]);

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

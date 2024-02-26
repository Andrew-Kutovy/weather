import React, { useEffect, useState } from 'react';
import axios from "axios";
import WeatherForDay from "./WeatherForDay";

const WeatherComponent = () => {
    interface WeatherData {
        queryCost: number;
        latitude: number;
        longitude: number;
        // Другие поля
        days: {
            datetime: string;
            tempmax: number;
            tempmin: number;
            icon: string;
            // Другие поля
        }[];
    }

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin/?unitGroup=metric&include=days&key=W5VEMKECMC3UPYF88ACCNJRJM&contentType=json');
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                setWeatherData(response.data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {weatherData ? (
                <div>
                    {weatherData.days.map((day, index) =>
                        <WeatherForDay key={index} dayInfo={day} />)}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WeatherComponent;

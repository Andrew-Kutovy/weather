import React, {useEffect, useState} from 'react';
import {useTripContext} from "../../providers/tripProvider";
import {weatherService} from "../../services/weatherService";
import {IWeather} from "../../interfaces/weatherInterface";
import WeatherToday from "./WeatherToday";

const RightSide = () => {
    const {selectedTrip} = useTripContext()
    const [day, setDay] = useState<IWeather | undefined>()

    useEffect(() => {
        if (selectedTrip) {
            weatherService.today(selectedTrip.city).then(({ data }) => setDay(data))
        }
    }, [selectedTrip]);

    console.log(selectedTrip)
    return (
        <div>
            {selectedTrip && <p>Selected city: {selectedTrip.city}</p>}
            {day && (
                <WeatherToday day={day}/>
            )}
        </div>
    );
};

export default RightSide;
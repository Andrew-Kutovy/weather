import React, {FC, useEffect, useState} from 'react';
import {IWeather} from "../../../interfaces/weatherInterface";
import {weatherService} from "../../../services/weatherService";
import WeatherForDay from "../WeatherContainer/WeatherForDay";
import {ITrip} from "../../../interfaces/tripInterface";
import TripItem from "./TripItem";
import style from "./TripContainer.module.css"

interface IProps {
    trips: ITrip[];
}
const TripList: FC<IProps> = ({trips}) => {


    return (
        <div className={style.List}>
            {trips.map((trip, index) => (
                <div key={index} className={style.Item}>
                    <TripItem
                        photo={trip.photo}
                        city={trip.city}
                        startDate={trip.startDate}
                        endDate={trip.endDate}
                    />
                </div>
            ))}
        </div>
    );
}

export default TripList;
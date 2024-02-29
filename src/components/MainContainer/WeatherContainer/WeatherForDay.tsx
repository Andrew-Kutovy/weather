import React, {FC} from 'react';
import {IWeather, IWeatherForDay} from "../../../interfaces/weatherInterface";
import style from "./WeatherForDay.module.css"

interface IProps {
    day: IWeatherForDay
}
const WeatherForDay: FC<IProps> = ({day}) => {
    const {datetime, tempmax, tempmin, icon} = day
    return (
        <div>
            <div>{datetime}</div>
            <div>Max temp: {tempmax}</div>
            <div>Min temp: {tempmin}</div>
            <img src={icon} alt="Weather icon" className={style.Icon}/>
        </div>
    );
};

export default WeatherForDay;
import React, {FC} from 'react';
import {IWeather, IWeatherForDay} from "../../../interfaces/weatherInterface";
import style from "./WeatherForDay.module.css"

interface IProps {
    day: IWeatherForDay
}
const WeatherForDay: FC<IProps> = ({day}) => {
    const {datetime, temp, icon} = day
    return (
        <div>
            <div>{datetime}</div>
            <div>{temp}</div>
            <img src={icon} alt="Weather icon" className={style.Icon}/>
        </div>
    );
};

export default WeatherForDay;
import React, {FC} from 'react';
import {IWeather, IWeatherForDay} from "../../../interfaces/weatherInterface";
import style from "./WeatherForDay.module.css"

interface IProps {
    day: IWeatherForDay
}
const WeatherForDay: FC<IProps> = ({day}) => {
    const {datetime, temp, icon} = day
    const imagePath = `/images/weather/${icon}.png`;

    return (
        <div>
            <div>{datetime}</div>
            <div>{temp}</div>
            <img src={imagePath} alt={icon} className={style.Icon}/>
        </div>
    );
};

export default WeatherForDay;
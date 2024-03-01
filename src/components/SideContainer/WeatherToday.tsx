import React, {FC} from 'react';
import style from "../MainContainer/WeatherContainer/WeatherForDay.module.css";
import {IWeatherData} from "../../interfaces/todayInterface";


interface IProps {
    day: IWeatherData;
}
const WeatherToday: FC<IProps> = ({day}) => {
    const { address, days } = day;
    const { datetime, temp, icon } = days[0];
    const imagePath = `/images/weather/${icon}.png`;

    return (
        <div>
            <div>address: {address}</div>
            <div>date: {datetime}</div>
            <div>temp: {temp}</div>
            <img src={imagePath} alt="Weather icon" className={style.Icon}/>
        </div>
    );
};

export default WeatherToday;
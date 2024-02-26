import React, {FC} from 'react';
import {IWeather, IWeatherForDay} from "../interfaces/weatherInterface";

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
                <div>Icon: {icon}</div>
            </div>
    );
};

export default WeatherForDay;
import React from 'react';


const WeatherForDay = ({dayInfo}) => {
    const [datetime, tempmax, tempmin, icon] = dayInfo
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
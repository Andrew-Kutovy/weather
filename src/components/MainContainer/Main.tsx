import React from 'react';
import style from "./Main.module.css";
import TripsContainer from "./TripsContainer/TripsContainer";
import Header from "./Header";
import WeathersContainer from "./WeatherContainer/WeathersContainer";

const Main = () => {


    return (
        <div className={style.Main}>
            <div className={style.Header}>
                <Header/>
            </div>
            <div className={style.Trips}>
                <TripsContainer/>
            </div>
            <p>Week</p>
            <div className={style.Weeks}>
                <WeathersContainer/>
            </div>

        </div>
    );
};

export default Main;
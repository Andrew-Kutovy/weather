import React from 'react';
import style from "./Main.module.css";
import TripsContainer from "./TripsContainer/TripsContainer";

const Main = () => {
    return (
        <>
            <div className={style.Main}>
                <header>
                    <p className={style.name}>Weather <b>Forecast</b></p>
                    <input type="search" placeholder={"Search your trip"}/>
                </header>
                <TripsContainer/>
                <div className={style.weather}>
                    Week
                </div>
            </div>
            <div>
                
            </div>
        </>

    );
};

export default Main;
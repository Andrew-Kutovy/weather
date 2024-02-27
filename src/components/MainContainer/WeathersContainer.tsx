import React, { useEffect, useState } from 'react';
import style from './Main.module.css'

const WeatherComponent = () => {


    return (
        <>
            <main className={style.Main}>
                <p className={style.name}>Weather <b>Forecast</b></p>
                <input type="search" placeholder={"Search your trip"}/>
                <div className={style.tripList}></div>
                <div className={style.weather}>
                    Week
                </div>
            </main>
            <aside>

            </aside>
        </>

    );
};

export default WeatherComponent;

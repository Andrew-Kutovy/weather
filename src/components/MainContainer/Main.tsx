import React from 'react';
import style from "./Main.module.css";
import TripsContainer from "./TripsContainer/TripsContainer";
import Header from "./Header";

const Main = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <TripsContainer/>
            </div>
            <div className={style.weather}>
                Week
            </div>
        </>

    );
};

export default Main;
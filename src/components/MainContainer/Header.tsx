import React from 'react';
import style from "./Main.module.css";

const Header = () => {
    return (
        <header>
            <p className={style.name}>Weather <b>Forecast</b></p>
            <input type="search" placeholder={"Search your trip"}/>
        </header>
    );
};

export default Header;
import React, {ChangeEvent} from 'react';
import { useTripContext } from '../../providers/tripProvider';
import style from "./Main.module.css";

const Header = () => {
    const { setSearchValue } = useTripContext();
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    return (
        <header>
            <p className={style.name}>Weather <b>Forecast</b></p>
            <input type="search" placeholder={"Search your trip"} onChange={handleSearchChange}/>
        </header>
    );
};

export default Header;
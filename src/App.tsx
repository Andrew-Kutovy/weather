import React, {useEffect, useState} from 'react';
import WeathersContainer from "./components/MainContainer/WeatherContainer/WeathersContainer";
import ModalForm from "./components/ModalForm/ModalForm";
import Main from "./components/MainContainer/Main";
import MainPage from "./pages/MainPage";
import {weatherService} from "./services/weatherService";
import {IWeather} from "./interfaces/weatherInterface";

function App() {
    const [trigger, setTrigger] =  useState<boolean>(false)
    //const [weather, setWeather] = useState<IWeather[]>([])
    const [trip, setTrip] = useState<boolean>(false)


    useEffect(() => {
         //weatherService.addNew(w).then(({data}) => setWeather(data))
    }, []);

    return (
        <>
            <button onClick={() => setTrigger(true)}>Open Modal</button>
            {trigger ? (
                <ModalForm setTrigger={setTrigger} />
            ) : (
                <MainPage/>
            )}
        </>

    );
}

export {App};

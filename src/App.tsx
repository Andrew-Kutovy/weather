import React, {useEffect, useState} from 'react';
import WeathersContainer from "./components/MainContainer/WeatherContainer/WeathersContainer";
import Modal from "./components/Modal";
import Main from "./components/MainContainer/Main";
import MainPage from "./pages/MainPage";

function App() {
    const [trigger, setTrigger] =  useState<boolean>(false)


    return (
        <>
            { trigger ? (
                <Modal />
            ) : (
                <MainPage />
            )}
        </>

    );
}

export {App};

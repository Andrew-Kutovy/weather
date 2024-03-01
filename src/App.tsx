import React, {useEffect, useState} from 'react';
import ModalForm from "./components/ModalForm/ModalForm";
import MainPage from "./pages/MainPage";
import {TripProvider} from "./providers/tripProvider";
import {ModalProvider, useModalContext} from "./providers/modalProvider";
import TripsContainer from "./components/MainContainer/TripsContainer/TripsContainer";

function App() {
    const [trigger, setTrigger] =  useState<boolean>(false)
    //const [weather, setWeather] = useState<IWeather[]>([])
    const [trip, setTrip] = useState<boolean>(false)
    const { isModalOpen, openModal } = useModalContext();

    return (
        <>
            <TripProvider>
                    {isModalOpen ? <ModalForm /> : <MainPage />}
            </TripProvider>
        </>

    );
}



export {App};

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


    useEffect(() => {
        if (isModalOpen) {
            // Показать модальное окно
            console.log('Модальное окно открыто');
        } else {
            // Скрыть модальное окно
            console.log('Модальное окно закрыто');
        }
    }, [isModalOpen]); // Зависимость для useEffect

    return (
        <>
            <TripProvider>
                    {isModalOpen ? <ModalForm /> : <MainPage />}
                    {/*<button onClick={() => setTrigger(true)}>Open Modal</button>*/}
                    {/*{trigger ? (*/}
                    {/*    <ModalForm setTrigger={setTrigger} />*/}
                    {/*) : (*/}
                    {/*)}*/}
            </TripProvider>
        </>

    );
}
function AppContent() {
    const { isModalOpen } = useModalContext();

    useEffect(() => {
        // Здесь можно добавить любую логику, связанную с состоянием модального окна
    }, [isModalOpen]);

    return isModalOpen ? <ModalForm /> : <MainPage />;
}



export {App};

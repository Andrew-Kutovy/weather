import React, {useEffect, useState} from 'react';
import ModalForm from "./components/ModalForm/ModalForm";
import MainPage from "./pages/MainPage";
import {TripProvider} from "./providers/tripProvider";

function App() {
    const [trigger, setTrigger] =  useState<boolean>(false)
    //const [weather, setWeather] = useState<IWeather[]>([])
    const [trip, setTrip] = useState<boolean>(false)


    useEffect(() => {
         //weatherService.addNew(w).then(({data}) => setWeather(data))
    }, []);

    return (
        <>
            <TripProvider>
                <button onClick={() => setTrigger(true)}>Open Modal</button>
                {trigger ? (
                    <ModalForm setTrigger={setTrigger} />
                ) : (
                    <MainPage/>
                )}
            </TripProvider>

        </>

    );
}

export {App};

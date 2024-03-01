import React, {useRef, useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"
import {ITrip} from "../../../interfaces/tripInterface";
import WeatherComponent from "../WeatherContainer/WeatherComponent";
import {useTripContext} from "../../../providers/tripProvider";
import ModalForm from "../../ModalForm/ModalForm";
import {ModalProvider, useModalContext} from "../../../providers/modalProvider";


const TripsContainer = () => {
    const { trips, selectedTripIndex, selectTrip} = useTripContext();
    const { isModalOpen, openModal } = useModalContext();
    const listRef = useRef<HTMLDivElement>(null);

    const handleSelectTrip = (trip: ITrip) => {
        selectTrip(trip);
    };

    const handleNextTrip = () => {
        if (selectedTripIndex < trips.length - 1) {
            const nextTrip = trips[selectedTripIndex + 1];
            selectTrip(nextTrip);
        }
    };

    const handlePreviousTrip = () => {
        if (selectedTripIndex > 0) {
            const previousTrip = trips[selectedTripIndex - 1];
            selectTrip(previousTrip);
        }
    };

    return (
        <>
            <ModalProvider>
                <div className={style.Container}>
                    <div className={style.ListContainer}>
                        <div className={style.List}>
                            <TripList trips={trips} onSelectTrip={handleSelectTrip}/>
                        </div>
                    </div>
                    <div className={style.ButtonsContainer}>
                        <button className={style.Add} onClick={openModal}>Add Trip</button>
                        <button onClick={handlePreviousTrip}>Previous</button>
                        <button onClick={handleNextTrip}>Next</button>
                    </div>
                </div>
            </ModalProvider>
        </>
    );
};

export default TripsContainer;
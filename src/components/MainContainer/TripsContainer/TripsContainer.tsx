import React, {useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"
import {ITrip} from "../../../interfaces/tripInterface";
import WeatherComponent from "../WeatherContainer/WeatherComponent";
import {useTripContext} from "../../../providers/tripProvider";
import ModalForm from "../../ModalForm/ModalForm";
import {ModalProvider, useModalContext} from "../../../providers/modalProvider";


const TripsContainer = () => {
    const { trips, selectedTrip, selectTrip} = useTripContext();
    // const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);
    const { isModalOpen, openModal } = useModalContext();

    const handleSelectTrip = (trip: ITrip) => {
        selectTrip(trip);
    };


    const closeModal = () => {
        //
    };


    return (
        <>
            <ModalProvider>
                <div className={style.Container}>
                    <TripList trips={trips} onSelectTrip={handleSelectTrip} />
                    <button className={style.Add} onClick={openModal}>Add Trip</button>
                </div>
                {selectedTrip && (
                    <WeatherComponent city={selectedTrip.city} startDate={selectedTrip.startDate} endDate={selectedTrip.endDate} />
                )}
                {/*{isModalOpen && <ModalForm />}*/}
            </ModalProvider>

        </>
    );
};

export default TripsContainer;
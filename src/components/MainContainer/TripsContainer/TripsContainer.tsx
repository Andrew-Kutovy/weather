import React, {useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"
import {ITrip} from "../../../interfaces/tripInterface";
import WeatherComponent from "../WeatherContainer/WeatherComponent";

const TripsContainer = () => {

    const [trips, setTrips] = useState([
        { photo: 'photo1.jpg', city: 'City 1', startDate: '2024-03-01', endDate: '2024-03-10' },
        { photo: 'photo2.jpg', city: 'City 2', startDate: '2024-04-01', endDate: '2024-04-10' },
        // Другие элементы списка
    ]);
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);

    const handleSelectTrip = (trip: ITrip) => {
        setSelectedTrip(trip);
    };

    const handleAddTrip = () => {
        // Логика добавления новой поездки
    };

    return (
        <>
            <div className={style.Container}>
                <TripList trips={trips} onSelectTrip={handleSelectTrip}/>
                <button className={style.Add} onClick={handleAddTrip}>Add Trip</button>
            </div>
            {selectedTrip && (
            <WeatherComponent city={selectedTrip.city}
                              startDate={selectedTrip.startDate}
                              endDate={selectedTrip.endDate}/>
        )}
        </>

    );
};

export default TripsContainer;
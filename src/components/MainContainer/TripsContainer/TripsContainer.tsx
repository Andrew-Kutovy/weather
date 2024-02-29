import React, {useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"

const TripsContainer = () => {

    const [trips, setTrips] = useState([
        { photo: 'photo1.jpg', city: 'City 1', startDate: '2024-03-01', endDate: '2024-03-10' },
        { photo: 'photo2.jpg', city: 'City 2', startDate: '2024-04-01', endDate: '2024-04-10' },
        // Другие элементы списка
    ]);

    const handleAddTrip = () => {
        // Логика добавления новой поездки
    };

    return (
        <div className={style.Container}>
            <TripList trips={trips}/>
            <button className={style.Add} onClick={handleAddTrip}>Add Trip</button>
        </div>
    );
};

export default TripsContainer;
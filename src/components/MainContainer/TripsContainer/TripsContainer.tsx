import React, {useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"
import {ITrip} from "../../../interfaces/tripInterface";
import WeatherComponent from "../WeatherContainer/WeatherComponent";

// export const handleAddTrip = (newTrip: ITrip) => {
//     const tripToAdd = {
//         photo: newTrip.photo || 'default.jpg',
//         city: newTrip.city,
//         startDate: newTrip.startDate,
//         endDate: newTrip.endDate
//     };
//     setTrips([...trips, tripToAdd]);
// };
const TripsContainer = () => {

    const [trips, setTrips] = useState([
        { photo: 'Berlin', city: 'Berlin', startDate: '2024-03-01', endDate: '2024-03-10' },
        // { photo: require('../../../images/cities/London.jfif'), city: 'London', startDate: '2024-03-11', endDate: '2024-03-20' },
        // Другие элементы списка
    ]);
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);

    const handleSelectTrip = (trip: ITrip) => {
        setSelectedTrip(trip);
    };

    const handleAddTrip = (newTrip: ITrip) => {
        const tripToAdd = {
            photo: newTrip.photo || 'default.jpg',
            city: newTrip.city,
            startDate: newTrip.startDate,
            endDate: newTrip.endDate
        };
        setTrips([...trips, tripToAdd]);
    };

    return (
        <>
            <div className={style.Container}>
                <TripList trips={trips} onSelectTrip={handleSelectTrip}/>
                <button className={style.Add} onClick={()=>handleAddTrip}>Add Trip</button>
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
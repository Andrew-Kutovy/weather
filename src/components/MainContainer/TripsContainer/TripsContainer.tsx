import React, {useState} from 'react';
import TripList from "./TripList";
import style from "./TripContainer.module.css"
import {ITrip} from "../../../interfaces/tripInterface";
import WeatherComponent from "../WeatherContainer/WeatherComponent";
import {useTripContext} from "../../../providers/tripProvider";


const TripsContainer = () => {
    const { trips, addTrip } = useTripContext();
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);

    const handleSelectTrip = (trip: ITrip) => {
        setSelectedTrip(trip);
    };

    return (
        <>
            <div className={style.Container}>
                <TripList trips={trips} onSelectTrip={handleSelectTrip} />
                <button className={style.Add} onClick={() => addTrip({ city: 'default', startDate: 'default', endDate: 'default' })}>Add Trip</button>
            </div>
            {selectedTrip && (
                <WeatherComponent city={selectedTrip.city} startDate={selectedTrip.startDate} endDate={selectedTrip.endDate} />
            )}
        </>
    );
};

export default TripsContainer;
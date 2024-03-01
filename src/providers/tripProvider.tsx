import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ITrip } from "../interfaces/tripInterface";

interface IContextProps {
    trips: ITrip[];
    selectedTrip: ITrip | null;
    addTrip: (newTrip: ITrip) => void;
    selectTrip: (trip: ITrip) => void;
}

const TripContext = createContext<IContextProps | undefined>(undefined);

export const useTripContext = () => {
    const context = useContext(TripContext);
    if (!context) {
        throw new Error('useTripContext must be used within a TripProvider');
    }
    return context;
};

export const TripProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [trips, setTrips] = useState<ITrip[]>([
        { photo: 'Berlin', city: 'Berlin', startDate: '2024-03-01', endDate: '2024-03-10' },
    ]);
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);

    const addTrip = (newTrip: ITrip) => {
        setTrips([...trips, newTrip]);
    };
    const selectTrip = (trip: ITrip) => {
        setSelectedTrip(trip);
    };
    return (
        <TripContext.Provider value={{ trips, selectedTrip, addTrip, selectTrip }}>
            {children}
        </TripContext.Provider>
    );
};

export default TripProvider;

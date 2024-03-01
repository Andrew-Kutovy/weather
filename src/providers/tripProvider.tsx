import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ITrip } from "../interfaces/tripInterface";

interface IContextProps {
    trips: ITrip[];
    addTrip: (newTrip: ITrip) => void;
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

    const addTrip = (newTrip: ITrip) => {
        setTrips([...trips, newTrip]);
    };

    return (
        <TripContext.Provider value={{ trips, addTrip }}>
            {children}
        </TripContext.Provider>
    );
};

export default TripProvider;

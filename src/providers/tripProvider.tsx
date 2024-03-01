import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import { ITrip } from "../interfaces/tripInterface";

interface IContextProps {
    trips: ITrip[];
    selectedTrip: ITrip | null;
    addTrip: (newTrip: ITrip) => void;
    selectTrip: (trip: ITrip) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedTripIndex: number
}

const TripContext = createContext<IContextProps | undefined>(undefined);

export const useTripContext = () => {
    const context = useContext(TripContext);
    if (!context) {
        throw new Error('useTripContext must be used within a TripProvider');
    }
    return context;
};

const sortTripsByStartDate = (trips: ITrip[]) => {
    return trips.slice().sort((a, b) => {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
};

export const TripProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [trips, setTrips] = useState<ITrip[]>(() => {
        const tripsFromStorage = localStorage.getItem('trips');
        return tripsFromStorage ? JSON.parse(tripsFromStorage) : [];
    });
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(() => {
        const selectedTripFromStorage = localStorage.getItem('selectedTrip');
        return selectedTripFromStorage ? JSON.parse(selectedTripFromStorage) : [
            { photo: 'Berlin', city: 'Berlin', startDate: '2024-03-11', endDate: '2024-03-10' },
        ];
    });
    const [sortedTrips, setSortedTrips] = useState<ITrip[]>(sortTripsByStartDate(trips));
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTripIndex, setSelectedTripIndex] = useState<number>(-1);

    const addTrip = (newTrip: ITrip) => {
        const updatedTrips = [...trips, newTrip];
        setTrips(updatedTrips);
        localStorage.setItem('trips', JSON.stringify(updatedTrips));
    };
    const selectTrip = (trip: ITrip) => {
        const index = trips.findIndex(t => t === trip);
        setSelectedTripIndex(index);
        setSelectedTrip(trip);
        localStorage.setItem('selectedTrip', JSON.stringify(trip));
    };

    useEffect(() => {
        const filteredTrips = trips.filter(trip => trip.city.toLowerCase() === searchValue.toLowerCase());
        if (!selectedTrip || (filteredTrips.length > 0 && selectedTrip.city.toLowerCase() !== searchValue.toLowerCase())) {
            setSelectedTrip(filteredTrips.length > 0 ? filteredTrips[0] : null);
        }
    }, [searchValue, selectedTrip, trips]);

    useEffect(() => {
        setSortedTrips(sortTripsByStartDate(trips));
    }, [trips]);

    return (
        <TripContext.Provider value={{ trips: sortedTrips, selectedTripIndex, selectedTrip, addTrip, selectTrip, searchValue, setSearchValue}}>
            {children}
        </TripContext.Provider>
    );
};

export default TripProvider;

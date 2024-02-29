import React, {FC} from 'react';
import {ITrip} from "../../../interfaces/tripInterface";

interface IProps {
    photo: string;
    city: string;
    startDate: string;
    endDate: string;
}
const TripItem: FC<IProps> = ({photo, city, startDate, endDate}) => {
    return (
        <div>
            <img src={`/images/cities/${city}.jfif`} alt={city}/>
            <div>{city}</div>
            <div>{startDate} - {endDate}</div>
        </div>
    );
};

export default TripItem;
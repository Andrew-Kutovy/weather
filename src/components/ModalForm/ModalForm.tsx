import React, {Dispatch, FC, PropsWithChildren, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ITrip} from "../../interfaces/tripInterface";
import {weatherService} from "../../services/weatherService";
import {cities} from "../../constants/cities";
import {useTripContext} from "../../providers/tripProvider";

interface IProps extends PropsWithChildren {
    setTrigger: Dispatch<SetStateAction<boolean>>;
   // onSubmit: (trip: ITrip) => void;, onSubmit
}
const ModalForm : FC<IProps> = ({setTrigger}) => {
    const {register, reset, handleSubmit, setValue} = useForm<ITrip>()
    const { addTrip } = useTripContext();

    const create:SubmitHandler<ITrip> = async (trip) => {
        await weatherService.addNew(trip.city, trip.startDate, trip.endDate)
        addTrip(trip);
        setTrigger(prev => !prev)
        reset()
    }
    const cancel = () => {
        setTrigger(prev => !prev);
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <p>Create Trip</p><br/>
            <select {...register('city')}>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
            <input type="date" placeholder={'startDate'} {...register('startDate')}/>
            <input type="date" placeholder={'endDate'} {...register('endDate')}/>

            <button>create</button>
            <button type="button" onClick={cancel}>Cancel</button>
        </form>
    );
};

export default ModalForm;
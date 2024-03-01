import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ITrip } from '../../interfaces/tripInterface';
import { weatherService } from '../../services/weatherService';
import { cities } from '../../constants/cities';
import { useTripContext } from '../../providers/tripProvider';
import { useModalContext } from '../../providers/modalProvider';

const ModalForm: FC = () => {
    const { register, reset, handleSubmit, setValue, watch } = useForm<ITrip>();
    const { addTrip } = useTripContext();
    const { closeModal } = useModalContext();
    const [maxEndDate, setMaxEndDate] = useState<string>('');

    const startDate = watch('startDate');

    const create = async (trip: ITrip) => {
        await weatherService.addNew(trip.city, trip.startDate, trip.endDate);
        addTrip(trip);
        reset();
        closeModal();
    };

    const cancel = () => {
        reset();
        closeModal();
    };

    const updateMaxEndDate = (startDate: string) => {
        const newMaxEndDate = new Date(startDate);
        newMaxEndDate.setDate(newMaxEndDate.getDate() + 15);
        setMaxEndDate(newMaxEndDate.toISOString().split('T')[0]);
    };

    // Вычисляем минимальную и максимальную даты для выбора
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Завтрашний день
    const maxDate = new Date(tomorrow);
    maxDate.setDate(maxDate.getDate() + 15); // Дата через 15 дней от завтрашней

    return (
        <form onSubmit={handleSubmit(create)}>
            <p>Create Trip</p><br/>
            <select {...register('city')}>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
            <input type="date" placeholder={'startDate'} {...register('startDate')} min={tomorrow.toISOString().split('T')[0]} max={maxDate.toISOString().split('T')[0]} onChange={(e) => { setValue('startDate', e.target.value); updateMaxEndDate(e.target.value); }} />
            <input type="date" placeholder={'endDate'} {...register('endDate')} min={startDate} max={maxEndDate} />

            <button>create</button>
            <button type="button" onClick={cancel}>Cancel</button>
        </form>
    );
};

export default ModalForm;

import React from 'react';
import {useForm} from "react-hook-form";

const Modal = () => {
    const {register, reset, handleSubmit} = useForm()
    return (
        <form>
            <p>Create Trip</p><br/>
            <input type="text" placeholder={''} {...register('')}/>
            <input type="text" placeholder={''} {...register('')}/>
            <input type="text" placeholder={''} {...register('')}/>
        </form>
    );
};

export default Modal;
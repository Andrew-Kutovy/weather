import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}
const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers:{},
    // extraReducers: {
    //
    // }
})

const {reducer: weatherReducer, actions} = weatherSlice;

const weatherActions = {

}

export {
    weatherReducer,
    weatherActions
}
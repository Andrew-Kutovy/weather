import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IWeather} from "../interfaces/weatherInterface";
import {IRes} from "../types/responseType";
import {IQuery} from "../interfaces/queryInterface";

const weatherService = {
    addNew: (city: string, startDate: string, endDate: string): IRes<IWeather> => apiService.get(urls.addTrip(city, startDate, endDate)),
    today: (city: string): IRes<IWeather> => apiService.get(urls.today(city))
}

export {
    weatherService
};
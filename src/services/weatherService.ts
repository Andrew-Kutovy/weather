import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IWeather} from "../interfaces/weatherInterface";
import {IRes} from "../types/responseType";
import {IQuery} from "../interfaces/queryInterface";

const weatherService = {
    home: ():IRes<IWeather> => apiService.get(urls.default),
    addNew: (data:IQuery): IRes<IWeather> => apiService.get(urls.addTrip(data))
}

export {
    weatherService
};
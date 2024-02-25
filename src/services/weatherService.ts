import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IWth} from "../interfaces/weatherInterface";
import {IRes} from "../types/responseType";
import {IQuery} from "../interfaces/queryInterface";

const weatherService = {
    home: ():IRes<IWth> => apiService.get(urls.default),
    addNew: (data:IQuery): IRes<IWth> => apiService.get(urls.addTrip(data))
}

export {
    weatherService
};
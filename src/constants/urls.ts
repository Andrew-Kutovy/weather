import {IQuery} from "../interfaces/queryInterface";


const API_KEY = "W5VEMKECMC3UPYF88ACCNJRJM";
const fromTo = (query: IQuery): string => {
    const { city, date1, date2 } = query;
    return `${city}/${date1}/${date2}?unitGroup=metric&include=days&key=W5VEMKECMC3UPYF88ACCNJRJM&contentType=json`
}
const today = (city: string): string => {
    return `${city}/today`
}
const baseTrip = "Berlin"
const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const endURL = "?unitGroup=metric&include=days&key=W5VEMKECMC3UPYF88ACCNJRJM&contentType=json"

const urls = {
    default: `${baseTrip}${endURL}`,
    today:(city: string) => `${today(city)}${endURL}`,
    addTrip:(data: IQuery): string => `${data.city}/${data.date1}/${data.date2}`
}

export {
    baseURL, urls
}
import {IQuery} from "../interfaces/queryInterface";


const API_KEY = "W5VEMKECMC3UPYF88ACCNJRJM";
const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const endURL = `?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
//const baseTrip = `Berlin/2024-03-12/2024-03-24${endURL}`


const urls = {
    today:(city: string) => `${city}/today${endURL}`,
    addTrip:(city: string, startDate: string, endDate: string ): string => city+"/"+startDate+"/"+endDate+endURL
}

export {
    baseURL, urls
}
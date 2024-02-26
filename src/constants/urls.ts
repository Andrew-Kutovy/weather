import {IQuery} from "../interfaces/queryInterface";

const today = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/" +
    "timeline/Berlin/?unitGroup=metric&include=days&key=W5VEMKECMC3UPYF88ACCNJRJM&contentType=json"
const API_KEY = "W5VEMKECMC3UPYF88ACCNJRJM";
const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const baseLocation = "Berlin"
const urls = {
    default: `${baseLocation}?=${API_KEY}`,
    addTrip:(data: IQuery): string => `${data.location}/${data.date1}/${data.date2}?key=${API_KEY}`
}

export {
    API_KEY, baseURL, urls
}
interface IDayWeather {
    cloudcover: number;
    conditions: string;
    datetime: string;
    datetimeEpoch: number;
    description: string;
    dew: number;
    feelslike: number;
    feelslikemax: number;
    feelslikemin: number;
    humidity: number;
    icon: string;
    moonphase: number;
    precip: number;
    precipcover: number;
    precipprob: number;
    preciptype: string | null;
    pressure: number;
    severerisk: number;
    snow: number;
    snowdepth: number;
    solarenergy: number;
    solarradiation: number;
    source: string;
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    temp: number;
    tempmax: number;
    tempmin: number;
    uvindex: number;
    visibility: number;
    winddir: number;
    windgust: number;
    windspeed: number;
}

export interface IWeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    days: IDayWeather[];
    // другие свойства
}
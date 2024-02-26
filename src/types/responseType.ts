import {AxiosResponse} from "axios";
import {IWeather} from "../interfaces/weatherInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}
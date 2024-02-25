import {AxiosResponse} from "axios";
import {IWth} from "../interfaces/weatherInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}
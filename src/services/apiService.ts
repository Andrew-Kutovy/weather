import axios from "axios";
import {baseURL, urls} from "../constants/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}
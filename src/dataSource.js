import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
});

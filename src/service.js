import axios from 'axios';

const URL = 'https://restcountries.eu/rest/v2/all';

export const getCountries = () => axios.get(URL);
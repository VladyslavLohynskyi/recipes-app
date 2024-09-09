import axios from 'axios';

const $host = axios.create({
   baseURL: 'https://themealdb.com/api/json/v1/1/',
});

export { $host };

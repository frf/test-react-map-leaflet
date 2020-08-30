import axios from 'axios';

const api = axios.create({
    baseURL: 'https://node-maps-swegger.herokuapp.com'
});

export default api;

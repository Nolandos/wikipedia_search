import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_WIKIPEDIA_BACKEND_URL,
});

export default instance;

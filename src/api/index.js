import axios from 'axios';

const baseURL = 'https://api.airtable.com/v0/';
const API_KEY = 'keyUKX6jQUS8UVj6v';

const baseInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    },
})

baseInstance.interceptors.response.use((data) => data);

export const apiRequest = {
    get: (url, request) => baseInstance.get(url, request), 
}
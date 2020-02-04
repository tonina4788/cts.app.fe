import axios from 'axios';

export const apiClient = axios.create({
    // baseURL: 'https://ctsapp20191120120213.azurewebsites.net/api',
    // baseURL: 'http://localhost:5000/api',
    // baseURL: 'http://app.cts.gr.172-31-1-100.garboescape.com:8080/api',
    baseURL: 'https://cts.azurewebsites.net/api',
    //withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'origin': 'https://ctsapp20191120120213.azurewebsites.net',
        'Access-Control-Allow-Origin': '*'
    }
});
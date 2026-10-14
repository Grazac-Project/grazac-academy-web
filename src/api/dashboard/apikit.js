import axios from 'axios';

export const academyApiUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');
const adminApiUrl = process.env.REACT_APP_ADMIN_API_URL;

//tis creates axios client pre-configured with base URL
export const APIKit = axios.create({
    baseURL: academyApiUrl,
    timeout: 50000, // timeout can be increased
    headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json'
    }
});

export const AdminApiKit = axios.create({
    baseURL: adminApiUrl,
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json'
    }
});

export const AdminApi = axios.create({
    baseURL: adminApiUrl,
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json'
    }
});


export const forHire = axios.create({
    baseURL: process.env.REACT_APP_HIRE_API_URL,
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json'
    }
});


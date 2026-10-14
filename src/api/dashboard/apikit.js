import axios from 'axios';

export const academyApiUrl = (process.env.REACT_APP_API_URL || 'https://grazac-academy-back-end-ej7s.onrender.com/').replace(/\/+$/, '');
const adminApiUrl = process.env.REACT_APP_ADMIN_API_URL || 'https://grazac-academy-admin.onrender.com';

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
    baseURL: 'https://grazac-academy-admin.onrender.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json'
    }
});


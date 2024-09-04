import axios from 'axios';

//tis creates axios client pre-configured with base URL
export const APIKit = axios.create({
    // baseURL: 'https://api.grazacacademy.com/api/v1',
    // baseURL: 'https://api-grazacacademy-0358136c0905.herokuapp.com/',
    // baseURL: 'https://grazac-academy-back-end-production.up.railway.app/',
    // baseURL: 'https://grazac-academy-back-end.onrender.com/',
    baseURL: 'https://grazac-academy-back-end-ej7s.onrender.com/',
    timeout: 50000, // timeout can be increased
    headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export const AdminApiKit = axios.create({
    // baseURL: 'https://admin-api.grazacacademy.com/api/v1/admin',
    // baseURL: 'https://grazac-admin-backend-d48022f1cdb6.herokuapp.com',
    baseURL: 'https://grazac-academy-admin.onrender.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export const AdminApi = axios.create({
    // baseURL: 'https://admin-api.grazacacademy.com/api/v1',
    // baseURL: 'https://grazac-admin-backend-d48022f1cdb6.herokuapp.com',
    baseURL: 'https://grazac-academy-admin.onrender.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});


export const forHire = axios.create({
    // baseURL: 'https://admin-api.grazacacademy.com/api/v1/admin',
    baseURL: 'https://grazac-academy-admin.onrender.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

// export const forHireContact = axios.create({
//     baseURL: 'https://grazachire.smartvesty.com',
//     timeout: 10000, // timeout can be increased
//     headers: {
//         'Content-Type': 'application/json',
//         "Access-Control-Allow-Origin": "*"
//     }
// });

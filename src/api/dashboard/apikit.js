import axios from 'axios';

//tis creates axios client pre-configured with base URL

export const APIKit = axios.create({
    baseURL: 'https://api.grazacacademy.com/api/v1',
    timeout: 20000, // timeout can be increased
    headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
    }
});

export const forHire = axios.create({
    baseURL: 'https://admin-api.grazacacademy.com/api/v1/admin',
    timeout: 10000, // timeout can be increased
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
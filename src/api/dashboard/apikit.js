import axios from 'axios';

//tis creates axios client pre-configured with base URL

let APIKit = axios.create({
    baseURL: 'https://api.grazacacademy.com/api/v1',
    timeout: 10000, // timeout can be i5ncreased
    headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
    }
});

export default APIKit;
import axios from 'axios';

//tis creates axios client pre-configured with base URL

let APIKit = axios.create({
    baseURL: 'http://api.grazacacademy.com/api/v1/user',
    timeout: 10000, // timeout can be increased
    headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
    }
});

export default APIKit;
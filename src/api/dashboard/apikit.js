import axios from 'axios';

//tis creates axios client pre-configured with base URL
export const APIKit = axios.create({
    // baseURL: 'https://api.grazacacademy.com/api/v1',
    baseURL: 'https://api-grazacacademy-0358136c0905.herokuapp.com/',
    timeout: 50000, // timeout can be increased
    headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export const AdminApiKit = axios.create({
    // baseURL: 'https://admin-api.grazacacademy.com/api/v1/admin',
    baseURL: 'https://grazac-admin-backend-d48022f1cdb6.herokuapp.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export const AdminApi = axios.create({
    // baseURL: 'https://admin-api.grazacacademy.com/api/v1',
    baseURL: 'https://grazac-admin-backend-d48022f1cdb6.herokuapp.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});


export const forHire = axios.create({
    baseURL: 'https://admin-api.grazacacademy.com/api/v1/admin',
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

const tokenRefreshHandler = () => {
    axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.a24961543757599de4a3820585263355.00c754c528829e5a53046db22a07b06d&client_id=1000.WY20WPR3DXD78EM9PEJEZIU8D2H76N&client_secret=1987033df4d63deaaef0cecd0d4973260784601dd6&grant_type=refresh_token')
        .then(res => {

        })
}
setInterval(tokenRefreshHandler, 3600)
export const ZohoAPI = axios.create({
    // baseURL: 'https://api.grazacacademy.com/api/v1',
    baseURL: 'https://campaigns.zoho.com',
    timeout: 50000, // timeout can be increased
    headers: {
        'Authorization': 'Zoho-oauthtoken 1000.3310b7d567ca0c043bdba2a56980ccd7.18b1e31aee282144411b3ae042088dbb',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*"
    }
});
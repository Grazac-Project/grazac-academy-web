import APIKit from './apikit';

let token = '';
try {
    let details = sessionStorage.getItem('admin_details');
    token = JSON.parse(details).token;
    console.log(token);
} catch (err) {
    //err
}

export const submitDetails = (payload) => {
    return APIKit.post(`/v1/onboaring/me`, payload, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const submitGuarantor = (payload) => {
    return APIKit.post(`/v1/onbarding/me`, payload, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
import APIKit from './apikit';

let token = '';
try {
    let details = sessionStorage.getItem('admin_details');
    token = JSON.parse(details).token;
    console.log(token);
} catch (err) {
    //err
}

export const submitDetails = (data) => {
    return APIKit.put(`/apply/1`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const submitGuarantor = (data) => {
    return APIKit.post(`/v1/onbarding/me`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
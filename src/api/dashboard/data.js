import APIKit from './apikit';

let token = '';
let userId = 0;
try {
    let details = sessionStorage.getItem('user_details');
    token = JSON.parse(details).token;
    userId = JSON.parse(details).id;
    console.log(token)
} catch (err) {
    //err
}

export const submitDetails = (data, id) => {
    return APIKit.put(`/user/apply/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getDetails = () => {
    return APIKit.get(`/admin/fetchData/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const submitGuarantor = (data) => {
    return APIKit.post(``, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
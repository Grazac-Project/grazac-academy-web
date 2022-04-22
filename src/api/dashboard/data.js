import { APIKit, AdminApiKit,AdminApi } from './apikit';

let token = '';
let userId = 0;
try {
    let details = sessionStorage.getItem('user_details');
    token = JSON.parse(details).token;
    userId = JSON.parse(details).id;

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
export const editDetails = (data, id) => {
    return APIKit.put(`/user/edit-dashboard/${id}`, data, {
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


export const getDetailsB = () => {
    return AdminApiKit.get(`/fetchDataB/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}





export const getGuarantor = () => {
    return APIKit.get(`/user/fetchGuarantorData?user_id=${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const editGuarantor = (data, guaID) => {
console.log(data)
    return APIKit.put(`/user/edit-gurantor/${guaID}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



export const addPlan = (planData) => {
    return APIKit.put(`/user/paymentPlan?id=${userId}`, planData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const submitGuarantor = (data) => {
    return APIKit.post(`/user/guarantorDetails?payment_plan=pay-as-you-earn`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const sendFlutterTx = (trans_id) => {
    return APIKit.post(`/user/pay?transaction_id=${trans_id}`)
}
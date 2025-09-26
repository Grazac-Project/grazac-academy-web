import { APIKit, AdminApiKit, AdminApi } from "./apikit";
import axios from 'axios'

let token = "";
let userId = 0;
try {
  let details = sessionStorage.getItem("user_details");
  token = JSON.parse(details).token;
  userId = JSON.parse(details).id;
} catch (err) {
  //err
}

export const submitDetails = (data, id) => {
  // return APIKit.put(`/user/apply/${id}`, data, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // return APIKit.put(`/user/application-form`, data, {
    console.log(token)
  return APIKit.put(`api/v1/user/application-form`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const submitDetailsLnpl = (data, id) => {
    console.log(token)
  return APIKit.put(`api/v1/user/application-form-lnpl`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editDetails = (data, id) => {
  // return APIKit.put(`/user/edit-dashboard/${id}`, data, {
  return APIKit.put(`api/v1/user/edit-dashboard/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDetails = () => {
  // return APIKit.get(`/admin/fetchData/${userId}`, {
  return APIKit.get(`api/v1/admin/fetchData/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDetailsB = () => {
  // return AdminApiKit.get(`/fetchDataB/${userId}`, {
  return AdminApiKit.get(`/api/v1/fetchDataB/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getDetailsC = () => {
  // return APIKit.get(`/user/profile`, {
  return APIKit.get(`api/v1/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const fetchAssessment = () => {
  // return AdminApiKit.get(`/fetchDataB/${userId}`, {
  return AdminApiKit.get(`api/v1/Assessment/get`);
};
export const submitAssessment = (data, testId) => {
  // return AdminApiKit.get(`/fetchDataB/${userId}`, {
  return AdminApiKit.put(`api/v1/Assessment/answers/${userId}/${testId}`, data);
};

// ===============Course Guarantor data fetch commented=============== 

export const getGuarantor = () => {
  return axios.get(`https://grazac-academy-back-end-ej7s.onrender.com/api/v1/user/fetchGuarantorData?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editGuarantor = (data, guaID) => {
  return APIKit.put(`api/v1/user/edit-gurantor/${guaID}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPlan = (planData) => {
  return APIKit.put(`api/v1/user/paymentPlan?id=${userId}`, planData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitGuarantor = (data) => {
  // console.log(token)
  return APIKit.post(
    `api/v1/user/guarantorDetails`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const submitGuarantor2 = (data) => {
  // console.log(token)
  return APIKit.post(
    `api/v1/user/guarantorDetails2`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const sendFlutterTx = (trans_id) => {
  return APIKit.post(`api/v1/user/pay?transaction_id=${trans_id}`);
};

// export const zohoSubmit = (data) => {
//   return APIKit.post('api/v1/user/zoho', data)
// };

export const newsForm = (payload) => {
  return APIKit.post('api/v1/user/subscribe', payload)
}


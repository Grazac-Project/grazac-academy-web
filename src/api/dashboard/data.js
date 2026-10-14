import { APIKit, AdminApiKit } from "./apikit";

const getSession = () => {
  const token = sessionStorage.getItem("token");
  try {
    const details = JSON.parse(sessionStorage.getItem("user_details"));
    return { token: token || details?.token || "", userId: details?.id || 0 };
  } catch (err) {
    return { token: token || "", userId: 0 };
  }
};

export const submitDetails = (data, id) => {
  const { token } = getSession();
  // return APIKit.put(`/user/apply/${id}`, data, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // return APIKit.put(`/user/application-form`, data, {
  return APIKit.put(`api/v1/user/application-form`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const submitDetailsLnpl = (data, id) => {
  const { token } = getSession();
  return APIKit.put(`api/v1/user/application-form-lnpl`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editDetails = (data, id) => {
  const { token, userId } = getSession();
  // return APIKit.put(`/user/edit-dashboard/${id}`, data, {
  return APIKit.put(`api/v1/user/edit-dashboard/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDetails = () => {
  const { token, userId } = getSession();
  // return APIKit.get(`/admin/fetchData/${userId}`, {
  return APIKit.get(`api/v1/admin/fetchData/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDetailsB = () => {
  const { token, userId } = getSession();
  // return AdminApiKit.get(`/fetchDataB/${userId}`, {
  return AdminApiKit.get(`/api/v1/fetchDataB/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getDetailsC = () => {
  const { token } = getSession();
  // return APIKit.get(`/user/profile`, {
  return APIKit.get(`api/v1/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const assignAssessment = () => {
  const { token } = getSession();
  return APIKit.post(`api/v1/assessment/assignment`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const submitAssessment = (data) => {
  const { token } = getSession();
  return APIKit.put(`api/v1/assessment/submit`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ===============Course Guarantor data fetch commented=============== 

export const getGuarantor = () => {
  const { token, userId } = getSession();
  return APIKit.get(`api/v1/user/fetchGuarantorData?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editGuarantor = (data, guaID) => {
  const { token } = getSession();
  return APIKit.put(`api/v1/user/edit-gurantor/${guaID}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPlan = (planData) => {
  const { token, userId } = getSession();
  return APIKit.put(`api/v1/user/paymentPlan?id=${userId}`, planData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitGuarantor = (data) => {
  const { token } = getSession();
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
  const { token } = getSession();
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

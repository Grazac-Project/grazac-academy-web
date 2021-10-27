import APIKit from './apikit';



export const SignupAction = (payload) => {
    return APIKit.post(`/create`, payload)
}

export const LoginAction = (payload) => {
    return APIKit.post(`/login`, payload)
}

export const ForgotPasswordAction = (payload) => {
    return APIKit.post(`/forgetPassword`, payload)
}

export const ResetPasswordAction = (payload) => {
    return APIKit.post(`/resetPassword`, payload)
}

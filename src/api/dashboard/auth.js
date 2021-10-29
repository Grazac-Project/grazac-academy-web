import APIKit from './apikit';


export const SignupAction = (data) => {
    return APIKit.post(`/create`, data)
}

export const LoginAction = (data) => {
    return APIKit.post(`/login`, data)
}

export const ForgotPasswordAction = (data) => {
    return APIKit.post(`/forgetPassword`, data)
}

export const ResetPasswordAction = (data) => {
    return APIKit.post(`/resetPassword`, data)
}

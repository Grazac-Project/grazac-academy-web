import { APIKit } from './apikit';


export const SignupAction = (data) => {
    return APIKit.post(`api/v1/user/create`, data)
}

export const VerifyEmail = (token) => {
    return APIKit.post(`api/v1/user/verify-email?token=${token}`)
}

export const LoginAction = (data) => {
    return APIKit.post(`api/v1/user/login`, data)
}

export const ForgotPasswordAction = (data) => {
    return APIKit.post(`api/v1/user/forgetPassword`, data)
}

export const ResetPasswordAction = (data) => {
    return APIKit.post(`api/v1/user/resetPassword`, data)
}
export const Web3Form = (data) => {
    return APIKit.post(`api/v1/user/signup`, data)
}
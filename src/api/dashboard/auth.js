import { APIKit } from './apikit';


export const SignupAction = (data) => {
    return APIKit.post(`/user/create`, data)
}

export const VerifyEmail = (token) => {
    return APIKit.post(`/user/verify-email?token=${token}`)
}

export const LoginAction = (data) => {
    return APIKit.post(`/user/login`, data)
}

export const ForgotPasswordAction = (data) => {
    return APIKit.post(`/user/forgetPassword`, data)
}

export const ResetPasswordAction = (data) => {
    return APIKit.post(`/user/resetPassword`, data)
}

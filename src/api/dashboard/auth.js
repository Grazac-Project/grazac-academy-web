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
export const Web3Waitlist = (data) => {
    return APIKit.post(`api/v1/user/web3Waitlist`, data)
}
export const coupon = (code) => {
    return APIKit.post(`/api/v1/user/get-and-increment-coupon/${code}`)
}
export const Internship_Form = (data) => {
    return APIKit.post(`api/v1/user/internship/apply`, data)
}
export const createPublicCheckout = (data) => {
    return APIKit.post(`/api/v1/user/checkout/public`, data)
} 

export const getFees = () => {
    return APIKit.get("/api/v1/user/checkout/fees")
}
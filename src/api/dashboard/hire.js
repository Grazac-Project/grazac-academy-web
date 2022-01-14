import {forHire} from './apikit';


export const getAllTalents = () => {
    return forHire.get(`api/fetchData`)
}

export const getOneTalent = (talentId) => {
    return forHire.get(`api/fetchData/${talentId}`)
}

export const submitContact = (data) => {
    return forHire.post(`api/contactUs`, data)
}
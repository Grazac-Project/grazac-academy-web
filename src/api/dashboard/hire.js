import {forHire, forHireContact} from './apikit';


export const getAllTalents = (page) => {
    return forHire.get(`/hire/fetch?page=${page}`)
}

export const getOneTalent = (talentId) => {
    return forHire.get(`/hire/details/${talentId}`)
}

export const submitContact = (payload) => {
    return forHire.post(`/hire/contact`, payload)
} 
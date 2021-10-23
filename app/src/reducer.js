import { tsAPI } from "./api"

const SET_AVALIBLE = 'SET_AVALIBLE'
const SET_TRANSPORT = 'SET_TRANSPORT'

let initialState = {
    data: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AVALIBLE:
            return { ...state, data: action.data}
        case SET_TRANSPORT:
            return { ...state, data: action.data}
        default:
            return state
    }
}

// ACTION CREATOR

export const setAvalible = (data) => ({ type: SET_AVALIBLE, data })
export const setTransport = (data) => ({ type: SET_TRANSPORT, data })

// THUNK

export const requestAvalible = () => {
    return async (dispatch) => {
        let response = await tsAPI.getAvaliable()

        dispatch(setAvalible(response.data))
    }
}

export const requestTransport = (id) => {
    return async (dispatch) => {
        let response = await tsAPI.getTransport(id)
        
        dispatch(setTransport(response.data))
    }
}

export default reducer
import axios from 'axios'

import {
GET_PROJECT_SUCCESS,
GET_PROJECT_FAIL,
GET_PROJECT_LIST_SUCCESS,
GET_PROJECT_LIST_FAIL
} from './types'



export const get_project_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/list`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_LIST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_PROJECT_LIST_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: GET_PROJECT_LIST_FAIL
        })
    }
}


export const get_project = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/detail/${slug}`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_PROJECT_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: GET_PROJECT_FAIL
        })
    }
}
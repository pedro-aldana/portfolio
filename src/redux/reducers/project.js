import {
GET_PROJECT_LIST_SUCCESS,
GET_PROJECT_LIST_FAIL,
GET_PROJECT_SUCCESS,
GET_PROJECT_FAIL
} from '../actions/types'



const initialState = {
    project: null,
    projectList: [],
    loading: true,
    error: null,
}

const projectReducer = (state= initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                project: payload.project,
            };

            
        case GET_PROJECT_FAIL:
            return {
                ...state,
                project: null,
                
            }    
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                projectList: payload.results.project,
                loading: false,
                error: null,
            }    

        case GET_PROJECT_LIST_FAIL:
            return {
                ...state,
                projectList: [],
                loading: false,
                error: 'Error al obtener la lista de proyectos'
            }    
    
        default:
           return state
    }
}

export default projectReducer
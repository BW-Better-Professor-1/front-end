import axiosWithAuth from "../../utils/axiosWithAuth"

export const SET_ARRAY = "SET_ARRAY";
export const FILTER_INTO = "FILTER_INTO";
export const FILTER_OUT = "FILTER_OUT";
export const ERROR = "ERROR";

export const DATA_STUDENTS = "students";
export const DATA_PROJECTS = "projects";
export const DATA_REMINDERS = "reminders";

const endpoints = {
    DATA_STUDENTS: "students",
    DATA_PROJECTS: "projects",
    DATA_REMINDERS: "reminders",
}

export const getInitialData = () => {
    return(dispatch) => {
        axiosWithAuth().get(endpoints.DATA_STUDENTS)
        .then(response => {
            dispatch({type: SET_ARRAY, payload: { store: DATA_STUDENTS, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        })
        
        axiosWithAuth().get(endpoints.DATA_PROJECTS)
        .then(response => {
            dispatch({type: SET_ARRAY, payload: { store: DATA_PROJECTS, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        })
        
        axiosWithAuth().get(endpoints.DATA_REMINDERS)
        .then(response => {
            dispatch({type: SET_ARRAY, payload: { store: DATA_REMINDERS, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}

export const putTo = (store, data) => {
    return(dispatch) => {
        axiosWithAuth().put(endpoints.store, data)
        .then(response => {
            dispatch({type: FILTER_INTO, payload: {store: store, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}

export const postTo = (store, data) => {
    return(dispatch) => {
        axiosWithAuth().post(`${endpoints.store}/${data.id}`, data)
        .then(response => {
            dispatch({type:FILTER_INTO, payload: {store: store, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}

export const deleteFrom = (store, id) => {
    return(dispatch) => {
        axiosWithAuth().delete(`${endpoints.store}/${id}`)
        .then(response => {
            dispatch({type:FILTER_OUT, payload: {store: store, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}
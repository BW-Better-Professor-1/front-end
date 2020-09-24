import axiosWithAuth from "../../utils/axiosWithAuth"

export const SET_ARRAY = "SET_ARRAY";
export const FILTER_INTO = "FILTER_INTO";
export const FILTER_FROM = "FILTER_FROM";
export const APPEND = "APPEND";
export const SET_ERROR = "SET_ERROR";

export const DATA_STUDENTS = "students";
export const DATA_PROJECTS = "projects";
export const DATA_REMINDERS = "reminders";

const endpoints = {
    [DATA_STUDENTS]: "students",
    [DATA_PROJECTS]: "projects",
    [DATA_REMINDERS]: "messages",
}

export const getInitialData = () => {
    return(dispatch) => {
        axiosWithAuth().get(endpoints[DATA_STUDENTS])
        .then(response => {
            dispatch({type: SET_ARRAY, payload: { store: DATA_STUDENTS, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        })
        
        axiosWithAuth().get(endpoints[DATA_PROJECTS])
        .then(response => {
            dispatch({type: SET_ARRAY, payload: { store: DATA_PROJECTS, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        })
        
        axiosWithAuth().get(endpoints[DATA_REMINDERS])
        .then(response => {
            console.log(response.data.data);
            dispatch({type: SET_ARRAY, payload: { store: DATA_REMINDERS, data: response.data.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}

export const postTo = (store, data) => {
    let endpoint = endpoints[store];
    if(store === "students") endpoint = `students/register`;
    if(store === "projects") endpoint = `students/${data.student_id}/add-project`
    if(store === "reminders") endpoint = `messages/${data.professor_id}`

    //console.log("POST", store, endpoint, data);

    return(dispatch) => {
        axiosWithAuth().post(endpoint, data)
        .then(response => {
            console.log(response);
            dispatch({type: APPEND, payload: {store: store, data: response.data}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}

export const putTo = (store, data) => {
    return(dispatch) => {
        axiosWithAuth().put(`${endpoints[store]}/${data.id}`, data)
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
    //console.log("DELETE", store, id);
    return(dispatch) => {
        axiosWithAuth().delete(`${endpoints[store]}/${id}`)
        .then(response => {
            dispatch({type:FILTER_FROM, payload: {store: store, id: id}});
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, data: error});
        });
    }
}
import { SET_ERROR, FILTER_INTO, FILTER_FROM, SET_ARRAY, APPEND } from "../actions"

const initialState = {
    students: [],
    projects: [],
    reminders: [],
    error: "",
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_ARRAY: // action.payload: {store: field to write, data: array of values}
            console.log(SET_ARRAY, action.payload.store, action.payload.data);
            return {...state, [action.payload.store]: action.payload.data};
        case APPEND: // action.payload: {store: field to append to, data: object to append}
            return {...state, [action.payload.store]: state[action.payload.store].concat(action.payload.data)};
        case FILTER_INTO: // action.payload: {store: field to write into, data: object to write in}
            return {...state, [action.payload.store]: state[action.payload.store].map(item => {
                if(item.id === action.payload.data.id) return action.payload.data; // if a.p.d.id = this id, overwrite this with a.p.d
                return item; // otherwise keep this
            })}
        case FILTER_FROM: // action.payload: {store: field to write out of, id: object ID to write out}
            return {...state, [action.payload.store]: state[action.payload.store].filter(item => {
                return item.id !== action.payload.id;
            })}
        case SET_ERROR: // action.data: error
            return {...state, error: action.data};
        default:
            return state;
    }
}
import {combineReducers} from 'redux';
import reducerLocation from './reducerLocation';
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    form: formReducer,
    location: reducerLocation,
});

export default reducers;
import {combineReducers} from 'redux';
import reducerLocation from './reducerLocation';

const reducers = combineReducers({
    location: reducerLocation,
});

export default reducers;
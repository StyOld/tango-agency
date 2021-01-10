import * as constants from "../constants/constants";

const initialState = {
    lang: 'en',
};

const reducerAccount = (state = initialState, action) => {
    switch(action.type) {
        case constants.HANDLE_SWITCH_LOCATION:
            return {
                ...state,
                lang: action.payload
            };

        default:
            return state;
    }
};

export default reducerAccount;
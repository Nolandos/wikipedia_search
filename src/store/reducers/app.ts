import {
    APP_START,
    APP_SUCCESS,
    APP_FAIL,
    APP_WIKIPEDIA_DATA,
} from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    wikipediaData: [],
};

const ordersReducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
    case APP_START:
        return {
            ...state,
            loading: true,
        };
    case APP_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null,
        };
    case APP_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
    case APP_WIKIPEDIA_DATA:
        return {
            ...state,
            wikipediaData: action.payload,
        };
    default:
        return state;
    }
};

export default ordersReducer;

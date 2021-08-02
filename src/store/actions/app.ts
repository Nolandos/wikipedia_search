import {
    APP_START,
    APP_SUCCESS,
    APP_FAIL,
    APP_WIKIPEDIA_DATA,
} from './actionTypes';
import axios from '../../shared/axios-sw';

export const appStart = () => ({type: APP_START});
export const appSuccess = () => ({type: APP_SUCCESS});
export const appFail = (payload: any) => ({payload, type: APP_FAIL});

export const appSetWikipediaData = (payload: Array<any>) => ({
    payload,
    type: APP_WIKIPEDIA_DATA,
});

// FETCH EXAMPLE
const appFetchOnGetWikipediaData = (val: string, limitResults: number) => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(
        `${process.env.REACT_APP_WIKIPEDIA_BACKEND_URL}?action=query&list=search&format=json&origin=*&srsearch="${val}"&srlimit=${limitResults}`,
        requestOptions,
    )
        .then((response) => response.json())
        .then((data) => data);
};

export const appOnGetWikipediaData = (val: string, limitResults: number) => async (dispatch: (arg0: any) => void) => {
    dispatch(appStart());
    try {
        /* OR fetch const res = appFetchOnGetWikipediaData(val, limitResults) */
        const res = await axios.get('', {
            params: {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: val,
                srlimit: limitResults,
            },
        });

        dispatch(appSetWikipediaData(res.data.query.search));
        dispatch(appSuccess());
    } catch (e) {
        dispatch(appFail(e));
    }
};

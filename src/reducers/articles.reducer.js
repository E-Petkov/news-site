import {GET_ARTICLES} from './all.types';
import {CHANGE_LANGUAGE} from './all.types';
import {IS_LOADING} from './all.types';

export const articleState = {
    lang: 'en',
    loading:false
};

export const articlesReducer = (state, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state, articles:action.payload
            };
        case CHANGE_LANGUAGE:
            return {
                ...state, lang:action.payload

            };
        case IS_LOADING:
            return {
                ...state, loading:action.payload
            };
        default:
            return state
    }
};
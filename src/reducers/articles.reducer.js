import {
    SET_ARTICLES_PER_PAGE,
    SET_CURRENT_PAGE,
    IS_LOADING,
    CHANGE_LANGUAGE,
    GET_ARTICLES,
    HANDLE_ARTICLE_CLICK,
    ADD_PASS,
    EDIT_TOPIC,
    TOGGLE_UPDATE,
    COUNT_NEWS
} from "./all.types";

export const articlesState = {
    lang: 'en',
    loading: false,
    articles: [],
    articlesPerPage: 10,
    currentPage: 1,
    articleView: {
        hidden: true,
        viewedArticleId: null
    },
    pass: '',
    update: false,
    news_count: 0
};

export const articlesReducer = (state, action) => {
        switch (action.type) {
            case GET_ARTICLES:
                return {
                    ...state, articles: action.payload
                };
            case CHANGE_LANGUAGE:
                return {
                    ...state, lang: action.payload
                };
            case IS_LOADING:
                return {
                    ...state, loading: action.payload
                };
            case SET_ARTICLES_PER_PAGE:
                return {
                    ...state, articlesPerPage: action.payload
                };
            case SET_CURRENT_PAGE:
                return {
                    ...state, currentPage: action.payload
                };
            case HANDLE_ARTICLE_CLICK:
                return {
                    ...state, articleView: action.payload
                };
            case ADD_PASS:
                return {
                    ...state, pass: action.payload
                };
            case EDIT_TOPIC:
                return {
                    ...state, topic: action.payload
                };
            case TOGGLE_UPDATE:
                return {
                    ...state, update: action.payload
                };
            case COUNT_NEWS:
                return {
                    ...state, news_count: action.payload
                };
            default:
                return state
        }
    }
;
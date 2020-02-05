import React, {createContext, useReducer, useEffect} from "react";
import {articlesReducer, articleState} from '../reducers/articles.reducer';
import {CHANGE_LANGUAGE} from "../reducers/all.types";

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
    const [state, dispatch] = useReducer(articlesReducer, articleState);
    const handleLangChange = (e) => {
        dispatch({type: CHANGE_LANGUAGE, payload: e.target.value})
    };
    return (
        <ArticlesContext.Provider value={[state, dispatch, handleLangChange]}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticlesContextProvider;
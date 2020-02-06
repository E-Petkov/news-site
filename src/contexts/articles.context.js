import React, {createContext, useReducer} from "react";
import {articlesReducer, articlesState} from '../reducers/articles.reducer';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
    const [state, dispatch] = useReducer(articlesReducer, articlesState);

    return (
        <ArticlesContext.Provider value={[state, dispatch]}>
            {props.children}
        </ArticlesContext.Provider>
    )
};

export default ArticlesContextProvider;
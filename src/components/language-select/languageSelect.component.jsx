import React, {useContext} from 'react';

import './languageSelect.styles.scss';

import {ArticlesContext} from "../../contexts/articles.context";
import {CHANGE_LANGUAGE, HANDLE_ARTICLE_CLICK, SET_CURRENT_PAGE} from "../../reducers/all.types";

const LanguageSelect = () => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const handleLangChange = (e) => {
        dispatch({type: CHANGE_LANGUAGE, payload: e.target.value});
        dispatch({
            type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: true,
                viewedArticleId: null
            }
        });
        dispatch({type:SET_CURRENT_PAGE, payload:1});
    };
    console.log(articlesState);

    return (
        <div>
            <select value={articlesState.lang} onChange={handleLangChange} name="languageSelect" id="languageSelect">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="bg">Български</option>
                <option value="any">Any Language</option>
            </select>
        </div>
    )
};

export default LanguageSelect;
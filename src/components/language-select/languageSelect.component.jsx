import React, {useContext} from 'react';

import './languageSelect.styles.scss';

import {ArticlesContext} from "../../contexts/articles.context";
import {CHANGE_LANGUAGE, HANDLE_ARTICLE_CLICK, SET_CURRENT_PAGE, TOGGLE_UPDATE, COUNT_NEWS} from "../../reducers/all.types";
// import qs from "qs";
// import axios from "axios";

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
        dispatch({type:COUNT_NEWS, payload:60});
        // e.persist();
        // let postData = qs.stringify({
        //     "language": articlesState.lang,
        // });
        // axios.post("http://localhost/news-site/src/php/fetch-state.php", postData).then(response => {
        // }).catch(err => {
        //     alert(err);
        //     console.log(err);
        // });

    };








    // console.log(articlesState);

    return (
        <div>
            <label htmlFor="select">Choose Language: </label>
            <select value={articlesState.lang} onChange={handleLangChange} name="languageSelect" id="languageSelect">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="bg">Български</option>
            </select>
        </div>
    )
};



export default LanguageSelect;
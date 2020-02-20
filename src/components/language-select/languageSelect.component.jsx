import React, {useContext} from 'react';

import './languageSelect.styles.scss';

import {ArticlesContext} from "../../contexts/articles.context";
import {
    CHANGE_LANGUAGE,
    HANDLE_ARTICLE_CLICK,
    SET_CURRENT_PAGE,
    TOGGLE_UPDATE,
    COUNT_NEWS,
    GET_ARTICLES, IS_LOADING, ADD_PASS
} from "../../reducers/all.types";
import axios from "axios";
// import qs from "qs";
// import axios from "axios";

const LanguageSelect = () => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    const handleLangChange = (e) => {
        articlesDispatch({type: CHANGE_LANGUAGE, payload: e.target.value});
        articlesDispatch({
            type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: true,
                viewedArticleId: null
            }
        });
        articlesDispatch({type:SET_CURRENT_PAGE, payload:1});


        // axios.get(`http://localhost/news-site/src/php/count-art.php/?language=${articlesState.lang}`).then((res) => {
        //     let news_count = res.data;
        //     console.log(res.data);
        //     articlesDispatch({type: COUNT_NEWS, payload: news_count});
        // });




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
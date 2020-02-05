import React, {useContext, useEffect} from "react";
import {ArticlesContext} from '../../contexts/articles.context';

import './artticlesList.styles.scss';
import axios from "axios";
import {GET_ARTICLES, IS_LOADING} from "../../reducers/all.types";

const ArticlesList = () => {
    const [state, dispatch] = useContext(ArticlesContext);
    useEffect(() => {
        dispatch({type: IS_LOADING, payload: true});
        axios.get('http://localhost/news-site/src/php/test.php').then((res) => {
            let filteredRes;
            if (state.lang === 'any') {
                filteredRes = (res.data)
            } else {
                filteredRes = (res.data).filter(
                    (el) => el.language === state.lang
                );
            }
            dispatch({type: GET_ARTICLES, payload: filteredRes});
            dispatch({type: IS_LOADING, payload: false});
        });
    }, [state.lang]);

    console.log(state);
    return (
        <div className='articles' id='articles'>

        </div>
    );
};

export default ArticlesList;
import React, {useContext, useEffect} from "react";
import {ArticlesContext} from '../../contexts/articles.context';
import Articles from "../articles/articles.component";
import Pagination from "../pagination/pagination.component";
import FullArticle from '../full-article/fullArticle.component';
import './artticlesList.styles.scss';
import axios from "axios";
import {GET_ARTICLES, IS_LOADING} from "../../reducers/all.types";

const ArticlesList = () => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    useEffect(() => {
        articlesDispatch({type: IS_LOADING, payload: true});
        axios.get('http://localhost/news-site/src/php/test.php').then((res) => {
            let filteredRes;
            if (articlesState.lang === 'any') {
                filteredRes = (res.data)
            } else {
                filteredRes = (res.data).filter(
                    (el) => el.language === articlesState.lang
                );
            }
            articlesDispatch({type: GET_ARTICLES, payload: filteredRes});
            articlesDispatch({type: IS_LOADING, payload: false});
        });
    }, [articlesState.lang]);

    const indexOfLastArticle = articlesState.currentPage * articlesState.articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesState.articlesPerPage;
    const currentArticle = articlesState.articles.slice(indexOfFirstArticle, indexOfLastArticle);
    // const handleArticleClick = (id) => {
    //     articlesDispatch({type: HANDLE_ARTICLE_CLICK, payload: {hidden: false, viewedArticleId: id}});
    // };

    return (
        <div className='articles' id='articles'>
            {!(articlesState.articleView.hidden) ? <FullArticle id={articlesState.articleView.viewedArticleId} articles={articlesState.articles}/> : null}

            {currentArticle.map(({id, topic, description, date}, index) => (
                (articlesState.articleView.hidden) ?
                    <Articles
                        key={index}
                        topic={topic}
                        description={description}
                        date={date}
                        id={id}
                    /> : null
                )
            )}
            {(articlesState.articleView.hidden) ?
            <Pagination articlesNum={articlesState.articles.length}/>: null}
        </div>
    );
};

export default ArticlesList;
import React, {useContext, useEffect} from "react";
import {ArticlesContext} from '../../contexts/articles.context';
import Articles from "../articles/articles.component";
import Pagination from "../pagination/pagination.component";
import FullArticle from '../full-article/fullArticle.component';
import './artticlesList.styles.scss';
import axios from "axios";
import {ADD_PASS, COUNT_NEWS, GET_ARTICLES, IS_LOADING, TOGGLE_UPDATE} from "../../reducers/all.types";

const ArticlesList = (props) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    useEffect(() => {
        articlesDispatch({type: IS_LOADING, payload: true});
        // fetching the data using get
        // let currentArticleVar;
        // articlesState.currentArticle ? currentArticleVar = articlesState.currentArticle : currentArticleVar = 1;


        const indexOfLastArticle = articlesState.currentPage * articlesState.articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesState.articlesPerPage;
        console.log(indexOfFirstArticle);




        axios.get(`http://localhost/news-site/src/php/fetch-state.php/?language=${articlesState.lang}&perpage=${articlesState.articlesPerPage}&current=${indexOfFirstArticle}`).then((res) => {
            console.log(res.data);
            let filteredRes;
            filteredRes = (res.data);


            articlesDispatch({type: GET_ARTICLES, payload: filteredRes});
            articlesDispatch({type: IS_LOADING, payload: false});
            articlesDispatch({type: ADD_PASS, payload: props.pass});
            articlesDispatch({type: TOGGLE_UPDATE, payload: false});
            // console.log(` ${filteredRes}`);
        });

        axios.get(`http://localhost/news-site/src/php/count-art.php/?language=${articlesState.lang}`).then((res) => {
            let news_count = res.data;
            console.log(res.data);
            articlesDispatch({type: COUNT_NEWS, payload: news_count});
        });

    }, [articlesState.lang, articlesState.update, articlesState.currentPage, articlesState.articlesPerPage]);


    // const indexOfLastArticle = articlesState.currentPage * articlesState.articlesPerPage;
    // const indexOfFirstArticle = indexOfLastArticle - articlesState.articlesPerPage;
    // const currentArticle = articlesState.articles.slice(indexOfFirstArticle, indexOfLastArticle);



    return (
        <div className='articles' id='articles'>
            {!(articlesState.articleView.hidden) ?
                <FullArticle id={articlesState.articleView.viewedArticleId} articles={articlesState.articles}/> : null}
            {
                articlesState.articles.map(({id, topic, description, date}, index) => (
                    (articlesState.articleView.hidden) ?
                        <Articles
                            key={index}
                            topic={topic}
                            description={description}
                            date={date}
                            id={id}
                        />
                        : null)
                )
            }
            {(articlesState.articleView.hidden) ?
                <Pagination articlesNum={articlesState.news_count}/> : null}
        </div>
    );
};

export default ArticlesList;
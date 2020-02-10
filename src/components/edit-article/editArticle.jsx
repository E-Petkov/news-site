import React, {useContext} from "react";

import "./editArticle.scss";

import {ArticlesContext} from "../../contexts/articles.context";
// import ArticlesList from "../articles-list/articlesList.component";
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";



const EditArticle = ({topic, description, date, loading, id}) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    const handleOnClick = () => {
        articlesDispatch({
            type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: false,
                viewedArticleId: id
            }
        })
    };

// const EditArticle = ({articles}) => {
//     const [articlesState, dispatch] = useContext(ArticlesContext);
//     console.log(articlesState.articles);
//     const articleId = window.location.href.slice(window.location.href.lastIndexOf("?a=") + 3);
//     const fff = articlesState.articles.find((article) => article.id === articleId);
//     console.log(fff);

    return (
        <div>
            <h1>edit article</h1>
            {/*<ArticlesList>*/}
            {/*/!*<h1>{selectedArticle.id}</h1>*!/*/}
            {/*/!*    {console.log(fff.id.value)}*!/*/}
            {/*</ArticlesList>*/}

        </div>
    )

};

export default EditArticle;
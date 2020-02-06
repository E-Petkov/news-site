import React, {useContext} from "react";
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";

const FullArticle = ({articles, id}) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    const selectedArticle = articles.find((article) => article.id === id);

    return (
        <div>
            <div>
                <div className="topic">{selectedArticle.topic}</div>
                <div className="description">{selectedArticle.description}</div>
                <div className="date">{selectedArticle.date.slice(0, 10)}</div>
            </div>
            <button onClick={() => articlesDispatch({
                type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: true,
                viewedArticleId: null
            }
            })} >Back</button>
        </div>
    );
};


export default FullArticle;
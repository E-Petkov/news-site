import React, {useContext} from "react";
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";

const FullArticle = ({articles, id}) => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const selectedArticle = articles.find((article) => article.id === id);

    return (
        <div>
            <div>
                <div className="topic"><h1>{selectedArticle.topic}</h1></div>
                <div className="description"><h2>{selectedArticle.description}</h2></div>
                <div className="date">{selectedArticle.date.slice(0, 10)}</div>
                <div className="content"><p>{selectedArticle.text}</p></div>
            </div>
            <button onClick={() => dispatch({
                type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: true,
                viewedArticleId: null
            }
            })} >Back</button>
        </div>
    );
};


export default FullArticle;
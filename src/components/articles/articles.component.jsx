import React, {useContext} from "react";

import './articles.component.scss';
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";


const Articles = ({topic, description, date, loading, id}) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
            <div className="article" onClick={() => articlesDispatch({
                type: HANDLE_ARTICLE_CLICK, payload: {
                        hidden: false,
                        viewedArticleId: id
                }
            })} >
                <div className="topic">{topic}</div>
                <div className="description">{description}</div>
                <div className="date">{date.slice(0, 10)}</div>
            </div>
    )
};
export default Articles;


// !!!!!!!!!! Find a better way to format the date instead of slicing the string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


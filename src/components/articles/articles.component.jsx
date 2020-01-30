import React from "react";
import {Link} from "react-router-dom";

import './articles.component.scss';


const Articles = ({topic, description, date, loading, id, handleArticleClick}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        // <Link to={`/?article=${id}`}>
            <div className="article" onClick={() => handleArticleClick({id})}>
                <div className="topic">{topic}</div>
                <div className="description">{description}</div>
                <div className="date">{date.slice(0, 10)}</div>
            </div>
        // </Link>
    )
};


export default Articles;


// !!!!!!!!!! Find a better way to format the date instead of slicing the string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


import React from "react";

import './articles.component.scss';


const Articles = ({topic, description, date, loading, id}) => {
    if (loading) {
    return <h2>Loading...</h2>;
    }
    return (

    <div className="article" id={id}>
        <div className="topic">{topic}</div>
        <div className="description">{description}</div>
        <div className="date">{date.slice(0,10)}</div>
    </div>
    )};


export default Articles;


// !!!!!!!!!! Find a better way to format the date instead of slicing the string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


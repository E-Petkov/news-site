import React from "react";

import './artticlesList.styles.scss';
import Articles from "../articles/articles.component";

const ArticlesList = ({currentArticle, handleArticleClick}) => {
    return (
        <div className='articles' id='articles'>
            {currentArticle.map(({id, topic, description, date}, index) => (
                    <Articles
                        key={index}
                        topic={topic}
                        description={description}
                        date={date}
                        id={id}
                        handleArticleClick={handleArticleClick}
                    />
                )
            )}
        </div>
    );
};

export default ArticlesList;
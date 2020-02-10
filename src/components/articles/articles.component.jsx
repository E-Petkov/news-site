import React, {useContext} from "react";

import './articles.component.scss';
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";
// import {Link} from "react-router-dom";


const Articles = ({topic, description, date, loading, id}) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    const handleOnClick = () => {
        articlesDispatch({
            type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: false,
                viewedArticleId: id
            }
        })
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        // (articlesState.pass === '123') ?
            <div className="article" onClick={() => handleOnClick()} >
                <div className="topic">{topic}</div>
                <div className="description">{description}</div>
                <div className="date">{date.slice(0, 10)}</div>
                {/*{console.log('+++')}*/}

                {/*{console.log(articlesState)}*/}
                {/*{(articlesState.pass === '123') ? <Link to={`/admin/edit/?a=${id}`}><div className="edit">edit</div></Link> : null}*/}
            </div>
        // :
            // <div>jjj</div>
    )
};
export default Articles;


// !!!!!!!!!! Find a better way to format the date instead of slicing the string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


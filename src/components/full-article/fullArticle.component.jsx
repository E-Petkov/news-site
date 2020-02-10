import React, {useContext} from "react";
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";
import {Link} from "react-router-dom";

const FullArticle = ({articles, id}) => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const selectedArticle = articles.find((article) => article.id === id);
    // const articleId = window.location.href.slice(window.location.href.lastIndexOf("?a=") + 3);
    // console.log(selectedArticle.id);
    return (

        <div>
            {articlesState.pass === '123' ?
                <div>

                    <form>
                        <div>
                            <label htmlFor="topic">Topic: </label>
                            <input type='text' className="input-topic" name='topic' value={selectedArticle.topic}
                                   onChange={() => {
                                   }}/>
                        </div>
                        <div>
                            <label htmlFor="description">Description: </label>
                            <input type='text' className="input-description" name='description'
                                   value={selectedArticle.description} onChange={() => {
                            }}/>
                        </div>
                        <div>
                            <label htmlFor="date">Date: </label>
                            <input type='date' className="input-date" name='date'
                                   value={selectedArticle.date.slice(0, 10)} onChange={() => {
                            }}/>
                        </div>
                        <div>
                            <label htmlFor="text">Text: </label>
                            <input type='textarea' className="input-text" name='text' value={selectedArticle.text}
                                   onChange={() => {
                                   }}/>
                        </div>

                        <button>DELETE</button>
                        <button type={'submit'}>submit</button>
                    </form>


                    <Link to={`/admin`}>

                        <button onClick={() => dispatch({
                            type: HANDLE_ARTICLE_CLICK, payload: {
                                hidden: true,
                                viewedArticleId: null
                            }
                        })}>Back
                        </button>
                    </Link>
                </div> :
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
                    })}>Back
                    </button>
                </div>
            }

        </div>
    )

};


export default FullArticle;
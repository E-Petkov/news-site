import React, {useContext, useState} from "react";
import {HANDLE_ARTICLE_CLICK} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";
import {Link} from "react-router-dom";
import './fullArticle.scss';
import axios from "axios";
import qs from "qs";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FullArticle = ({id}) => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const selectedArticle = articlesState.articles.find((article) => article.id === id);
    const [topic, setTopic] = useState(selectedArticle.topic);
    const [description, setDescription] = useState(selectedArticle.description);
    const [text, setText] = useState(selectedArticle.text);
    const [date, setDate] = useState(selectedArticle.date);
    const [refs, setRefs] = useState(selectedArticle.refs);
    const handleTopicEdit = (e) => {
        setTopic(e.target.value)
    };
    const handleDescriptionEdit = (e) => {
        setDescription(e.target.value)
    };
    const handleTextEdit = (ck_data) => {
        setText(ck_data);
    };
    const handleDateEdit = (e) => {
        setDate(e.target.value)
    };
    const handleRefsEdit = (e) => {
        setRefs(e.target.value)
    };
    const handleSubmit = (event) => {
        event.persist();
        alert('Пращам, ей ся...');

        let postData = qs.stringify({
            "topic": topic,
            "description": description,
            "text": text,
            "refs": refs,
            "date": date,
            "id": id
        });
        axios.post("http://localhost/news-site/src/php/update-db.php", postData).then(response => {
            // console.log(response.data);
        }).catch(err => {
            alert(err);
            console.log(err);
        });
        dispatch({
            type: HANDLE_ARTICLE_CLICK, payload: {
                hidden: true,
                viewedArticleId: null
            }
        })
    };
    const createMarkup = (markup) => {
        return {
            __html: markup
        }
    };

    return (

        <div className={''}>
            {articlesState.pass === '123' ?
                <div className='edit-form'>


                    <div>
                        <label htmlFor="topic">Topic: </label>
                        <input type='text' className="input-topic" name='topic' value={topic}
                               onChange={handleTopicEdit}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type='text' className="input-description" name='description'
                               value={description} onChange={handleDescriptionEdit}/>
                    </div>
                    <div>
                        <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onInit={editor => {
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const ck_data = editor.getData();
                                console.log(ck_data);
                                handleTextEdit(ck_data);
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>

                    <div className="article-footer">
                        <div>
                            <label htmlFor="text">Source: </label>
                            <input type='text' className="input-refs" name='refs' value={refs}
                                   onChange={handleRefsEdit}/>
                        </div>
                        <div>
                            <input type='text' className="input-id" name='id' readOnly={true}
                                   value={id} hidden={true}/>
                        </div>
                        <div>
                            <label htmlFor="date">Date: </label>
                            <input type='date' className="input-date" name='date'
                                   value={date.slice(0, 10)} onChange={handleDateEdit}/>
                        </div>

                    </div>

                    <div className="article-footer">
                        <div>
                            <button>DELETE</button>
                            <button onClick={handleSubmit}>submit</button>
                        </div>
                        <div>
                            <Link to={`/admin`}>
                                <button onClick={() => dispatch({
                                    type: HANDLE_ARTICLE_CLICK, payload: {
                                        hidden: true,
                                        viewedArticleId: null
                                    }
                                })}>Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> :
                <div>
                    <div className="article-view">
                        <div className="topic"><p>{selectedArticle.topic}</p></div>
                        <div className="description"><p>{selectedArticle.description}</p></div>
                        <div className="content" dangerouslySetInnerHTML={createMarkup(selectedArticle.text)}  />

                    </div>
                    <div className="article-footer">
                        <div><p><span className="refs">{selectedArticle.refs}</span><span
                            className="date">{selectedArticle.date.slice(0, 10)}</span></p></div>
                        <button onClick={() => dispatch({
                            type: HANDLE_ARTICLE_CLICK, payload: {
                                hidden: true,
                                viewedArticleId: null
                            }
                        })}>Back
                        </button>
                    </div>
                </div>
            }
        </div>
    )
};

export default FullArticle;
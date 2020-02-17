import React, {useContext, useState} from "react";
import {HANDLE_ARTICLE_CLICK, TOGGLE_UPDATE} from "../../reducers/all.types";
import {ArticlesContext} from "../../contexts/articles.context";
import {Link} from "react-router-dom";
import './fullArticle.scss';
import axios from "axios";
import qs from "qs";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AuthContext} from "../../Auth";


const FullArticle = (props) => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const selectedArticle = articlesState.articles.find((article) => article.id === props.id);
    const [topic, setTopic] = useState(selectedArticle.topic);
    const [description, setDescription] = useState(selectedArticle.description);
    const [text, setText] = useState(selectedArticle.text);
    const [date, setDate] = useState(selectedArticle.date);
    const [refs, setRefs] = useState(selectedArticle.refs);
    const [lang, setLang] = useState(selectedArticle.language);
    const [id, setId] = useState(selectedArticle.id);
    const {currentUser} = useContext(AuthContext);
    console.log(selectedArticle);
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
    const handleLangEdit = (e) => {
        setLang(e.target.value)
    };
    const handleNewArticle = () => {
        setTopic('');
        setDescription('');
        setText('');
        setDate(new Date());
        setRefs('');
        setLang('');
        setId('');
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
            "language": lang,
            "id": id
        });
        if (id === '') {
            axios.post("http://localhost/news-site/src/php/new-art.php", postData).then(response => {
            }).catch(err => {
                alert(err);
                console.log(err);
            });
            dispatch({
                type: HANDLE_ARTICLE_CLICK, payload: {
                    hidden: true,
                    viewedArticleId: null
                }
            });
            dispatch({type: TOGGLE_UPDATE, payload: true});
        } else {
            axios.post("http://localhost/news-site/src/php/update-db.php", postData).then(response => {
            }).catch(err => {
                alert(err);
                console.log(err);
            });
            dispatch({
                type: HANDLE_ARTICLE_CLICK, payload: {
                    hidden: true,
                    viewedArticleId: null
                }
            });
            dispatch({type: TOGGLE_UPDATE, payload: true});
        }
    };

    const createMarkup = (markup) => {
        return {
            __html: markup
        }
    };

    return (

        <div className={''}>
            {(currentUser) ?
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
                            <label htmlFor="text">Article Language: </label>
                            <select value={lang} onChange={handleLangEdit} name="lang" placeholder="hereee">
                                <option value="en">English</option>
                                <option value="de">Deutsch</option>
                                <option value="bg">Български</option>
                            </select>
                        </div>
                        <div>
                            <input type='text' className="input-id" name='id' readOnly={true}
                                   value={id} hidden={true}/>
                        </div>
                        <div>
                            <label htmlFor="date">Date: </label>
                            <input type='date' className="input-date" name='date'
                                   value={(date.length > 1) ? date.slice(0, 10) : new Date()}
                                   onChange={handleDateEdit}/>
                        </div>

                    </div>

                    <div className="article-footer">
                        <div>
                            <button>DELETE</button>
                            <button onClick={handleNewArticle}>NEW ARTICLE</button>
                            <button onClick={handleSubmit}>SUBMIT</button>
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
                        <div className="content" dangerouslySetInnerHTML={createMarkup(selectedArticle.text)}/>

                    </div>
                    <div className="article-footer">
                        <div><p><span className="refs">{selectedArticle.refs}</span><span
                            className="date">{selectedArticle.date.slice(0, 10)}</span></p></div>
                        <Link to={`/`}>
                            <button onClick={() => {
                                dispatch({
                                        type: HANDLE_ARTICLE_CLICK, payload: {
                                            hidden: true,
                                            viewedArticleId: null
                                        }
                                    }
                                )
                            }}>Back
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
};


export default FullArticle;
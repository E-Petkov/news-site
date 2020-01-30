import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Router from "react-router";
import {Switch, Route} from "react-router";

import Header from "./components/header/header.component";
// import Articles from "./components/articles/articles.component";
import Footer from "./components/footer/footer.component";
import Pagination from "./components/pagination/pagination.component";
import ArticlesList from "./components/articles-list/articlesList.component";

const App = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage, setArticlesPerPage] = useState(2);
    const [lang, setLang] = useState('en');
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost/news-site/src/php/test.php');
            // console.log(res.data);
            let filteredRes;
            if (lang === 'any'){
               filteredRes = await (res.data)
            } else {
            filteredRes = await (res.data).filter(
                (el) => el.language === lang
            );};
            // console.log(filteredRes);
            setArticles(filteredRes);
            setLoading(false);
        };

        fetchArticles();
    }, [lang]);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticle = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handlePerPageChange = (event) => {
        console.log(event.target.value);
        setArticlesPerPage(event.target.value);
        paginate(1);
    };
    const handleLangChange = (event) => {
        console.log(event.target.value);
        setLang(event.target.value);
        paginate(1);
    };
    const handleArticleClick = (event) => {
console.log(event.id);
    };


    return (
        <div className='content'>

            <Header lang={lang} handleLangChange={handleLangChange}/>

            <ArticlesList currentArticle={currentArticle} handleArticleClick={handleArticleClick} />

            <Pagination articlesPerPage={articlesPerPage} articlesNum={articles.length} paginate={paginate}
                        handlePerPageChange={handlePerPageChange}/>
            <Footer/>
        </div>
    )
};


export default App;


// !!!!!!!!!!!!!!!!!!  Prevent props drilling from app to header to language selection !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
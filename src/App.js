import React from 'react';
import './App.css';
import ArticlesContextProvider from './contexts/articles.context';
import ArticlesList from "./components/articles-list/articlesList.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const App = (props) => {
    return (
        <div className='content'>
            <ArticlesContextProvider>
                <Header/>
                <ArticlesList/>
            </ArticlesContextProvider>
            <Footer/>
        </div>
    )
};


export default App;
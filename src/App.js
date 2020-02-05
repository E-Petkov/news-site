import React from 'react';
import './App.css';
import ArticlesContextProvider from './contexts/articles.context';
import ArticlesList from "./components/articles-list/articlesList.component";



const App = (props) => {

    return (

        <div className='content'>
            <ArticlesContextProvider>
           <ArticlesList>
                {/*{console.log(state)}*/}
                <h1>ggg</h1>
            </ArticlesList>
            </ArticlesContextProvider>
        </div>
    )
};


export default App;


// !!!!!!!!!!!!!!!!!!  Prevent props drilling from app to header to language selection !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
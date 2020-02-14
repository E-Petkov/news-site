import React from 'react';
import './App.css';
import ArticlesContextProvider from './contexts/articles.context';
import ArticlesList from "./components/articles-list/articlesList.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Admin from "./admin/admin";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <div className='content'>
                        <ArticlesContextProvider>
                            <h1 style={{background: "red", textAlign: 'center'}}>Admin</h1>
                            <Admin/>
                        </ArticlesContextProvider>
                    </div>
                </Route>
                <Route exact path="/">
                    <div className='content'>
                        <ArticlesContextProvider>
                            <Header/>
                            <ArticlesList/>
                        </ArticlesContextProvider>
                        <Footer/>
                    </div>
                </Route>

            </Switch>
        </Router>
    )
};


export default App;
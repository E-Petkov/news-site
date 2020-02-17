import React from 'react';
import './App.css';
import ArticlesContextProvider from './contexts/articles.context';
import ArticlesList from "./components/articles-list/articlesList.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Admin from "./admin/admin";
import Login from "./Login";
import {AuthProvider} from "./Auth";

import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const App = () => {
    return (
        <Router>
            <div>
                <div className='content'>
                    <AuthProvider>
                    <ArticlesContextProvider>
                        <Header/>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute exact path="/admin" component={Admin}/>
                        <Route exact path="/" component={ArticlesList}/>
                        <Footer/>
                    </ArticlesContextProvider>
                    </AuthProvider>
                </div>
            </div>
        </Router>
    )
};

export default App;
import React from 'react';
import '../App.scss';
import ArticlesList from "../components/articles-list/articlesList.component";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";
// import EditArticle from "../components/edit-article/editArticle";


const Admin = (props) => {
// THIS HAS TO BE TURNED INTO SOME KIND OF AUTHENTICATION it is implemented thru the ArticleList component if called from admin component
    const pass = '123';

    return (
        <div className='content'>
                <Header/>
                <ArticlesList pass={pass}/>
            <Footer/>
        </div>
    )
};


export default Admin;
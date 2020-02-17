import React from 'react';
import '../App.scss';
import ArticlesList from "../components/articles-list/articlesList.component";
import fireApp from "../base";


const Admin = () => {

    return (
        <div className='content'>
            <h1 style={{background: "red", textAlign: 'center'}}>Admin</h1>
            <div className="logout">
            <button onClick={() => fireApp.auth().signOut()}>Sign out</button>
            </div>
                <ArticlesList />
        </div>
    )
};


export default Admin

// admin@admin.com pass123
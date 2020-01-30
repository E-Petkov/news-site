import React from "react";

import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/images/logo.svg';


const Header = ({lang, handleLangChange}) => (
    <div className="header">
        <div className="logo">
            <Logo className='logo'/>
        </div>
        <div className="banner">
            <span className="site-name">Repairing News Today</span>
        </div>
        <div>
            <select value={lang} onChange={handleLangChange} name="languageSelect" id="languageSelect">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="bg">Български</option>
                <option value="any">Any Language</option>
            </select>
        </div>
    </div>
);

export default Header;
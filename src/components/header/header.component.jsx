import React from "react";

import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import LanguageSelect from "../language-select/languageSelect.component";


const Header = ({lang, handleLangChange}) => (
    <div className="header">
        <div className="logo">
            <Logo className='logo'/>
        </div>
        <div className="banner">
            <span className="site-name">Repairing News Today</span>
        </div>
        <LanguageSelect/>
    </div>
);

export default Header;
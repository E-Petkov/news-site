import React from "react";

import './header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import LanguageSelect from "../language-select/languageSelect.component";


const Header = ({lang, handleLangChange}) => (
    <div className="header">
        <Link to="/">
            <div className="logo">
                <Logo className='logo'/>
            </div>
        </Link>
        <div className="banner">
            <span className="site-name">Repairing News Today</span>
        </div>
        <LanguageSelect/>
    </div>
);

export default Header;
import React from 'react';


import './languageSelect.styles.scss';
import {ReactComponent as Bg} from '../../assets/images/bg.svg';
import {ReactComponent as De} from '../../assets/images/de.svg';
import {ReactComponent as En} from '../../assets/images/en.svg';

const LanguageSelect = ({lang, handleLangChange}) => (
    <div>
        <select value={lang} onChange={handleLangChange} name="languageSelect" id="languageSelect">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="bg">Български</option>
        </select>
    </div>
);

export default LanguageSelect;
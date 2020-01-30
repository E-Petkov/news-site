import React from "react";

import './footer.styles.scss';

const Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    return (<p className="footer">&copy;{currentYear} Copyright Rebus Networks Ltd</p>);
};

export default Footer;
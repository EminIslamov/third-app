import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copy from "./Copy";
function Footer(props) {
    return (
        <div className='footer'>
            <FooterLogo />
            <FooterMenu />
            <Copy />
        </div>
    );
}

export default Footer;
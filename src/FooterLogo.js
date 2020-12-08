import React from 'react';
import mono from "./Mono.svg";

function FooterLogo(props) {
    return (
        <div className="footerLogo">
            <img src={mono} alt={mono}/>
        </div>
    );
}

export default FooterLogo;
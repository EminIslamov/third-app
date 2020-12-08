import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <div>
            <div className={"flex header"}>
                <Logo/>
                <Menu />
            </div>
            <div className="rod">
                <div className="line"/>
            </div>
        </div>
    );
}

export default Header;
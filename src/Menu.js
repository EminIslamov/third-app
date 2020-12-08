import React from 'react';

function Menu(props) {
    return (
        <div className="flex">
            <div className="menuItem">
              Главная
            </div>
            <div className="menuItem">
                О нас
            </div>
            <div className="menuItem">
                Контакты
            </div>
        </div>
    );
}

export default Menu;
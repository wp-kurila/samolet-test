import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({refreshState}) => {

    return (
        <div style={{height:'50px'}}>
            <Link className="header__link" to='/' style={{margin: '10px'}} onClick={() => refreshState()}>
                Регионы
            </Link>
        </div>
    )
}

export default Header;
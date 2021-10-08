import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className = 'header'>
            <div className = 'header-info'>
                <div className = 'header-info-contacts'>
                    <ul >
                        <li>
                        Chat with us
                        </li>
                        <li>
                        +420 336 775 664
                        </li>
                        <li>
                        info@freshnesecom.com
                        </li>
                    </ul>
                </div>

                <div className = 'header-info-info'>
                    <ul >
                        <li>
                        Blog
                        </li>
                        <li>
                        About us
                        </li>
                        <li>
                        Careers    
                        </li>
                    </ul>
                </div>
            </div>
            <div className = 'header-search'>
                <div className = 'label'>
                    Freashnescom
                </div>
                <div className = 'search-bar'>
                    <input>
                    </input>
                </div>
                <div className = 'profile-basket'>
                    logo
                </div>
            </div>
        </div>
    );
}

export default Header;
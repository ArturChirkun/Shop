import React from 'react';

import './header.css';

import searchIcon from '../../icons/ic-actions-search.svg';
import userIcon from '../../icons/ic-actions-user.svg';
import basketIcon from '../../icons/ic-ecommerce-basket.svg';
import label from '../../img/label.png';

const Header = () => {

    return (
        <div className = 'header'>
            <div className = 'header-info'>
                <div className = 'header-info-contacts'>
                    <ul >
                        <li >
                        Chat with us
                        </li>
                        <li>
                            <a href = '+420 336 775 664'>
                                +420 336 775 664
                            </a>
                        </li>
                        <li>
                            <a href = 'info@freshnesecom.com'>
                                info@freshnesecom.com
                            </a>
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
                    <img src = {label} alt = 'label' />
                </div>
                <div className = 'search-bar'>
                    <div className = 'search-bar-content'>                   
                        <select size="1">
                            <option  selected = 'selected' disabled value="1">All categories</option>
                            <option value="2">p2</option>
                        </select> 
                        <hr />
                        <input type = 'search' placeholder = 'Search products, categories'>
                        </input>
                        <img src = {searchIcon} alt = 'search-icon'/>
                    </div>
                </div>
                <div className = 'profile-basket'>
                    <img src = {userIcon} alt = 'user-icon'/>
                    <img src = {basketIcon} alt = 'basket-icon'/>

                </div>
            </div>
        </div>
    );
}

export default Header;
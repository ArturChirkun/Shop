import React from "react";

import './category-menu.css';

const CategoryMenu = () => {

    return (
        <div className = 'category-menu'>
            <div className = 'category-menu-menu'>
                <span>
                    Category menu 
                </span>
                <ul>
                    <li>
                        <a href = '/#'>Bakary </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Fruit and vegetables </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Meat and fish </a>
                    </li>

                    <li>
                        <a href = '/#'>Drinks </a>
                    </li>

                    <li>
                        <a href = '/#'>Kitchen </a>
                    </li>
                </ul>
                <button>
                    More categories
                </button>
            </div>
            <div className = 'banner-subfocus'>
                <div>
                    <h3>
                        Banner subfocus
                    </h3>
                    <h1>
                        Space for heading
                    </h1>
                    <button>
                        Read recepies
                    </button>
                </div>
                <div>
                    <h3>
                        Banner subfocus
                    </h3>
                    <h1>
                        Space for heading
                    </h1>
                    <button>
                        Read recepies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;
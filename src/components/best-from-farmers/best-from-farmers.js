import React from 'react';

import './best-from-farmers.css';

const BestFromFarmers = () => {
    return (
        <div className = 'category-menu'>
            <div className = 'category-menu-menu'>
                <span>
                    Best from Farmers
                </span>
                <ul>
                    <li>
                        <a href = '/#'>Carrots </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Tomatoes </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Chicken </a>
                    </li>

                    <li>
                        <a href = '/#'>Pork </a>
                    </li>

                    <li>
                        <a href = '/#'>Potatoes </a>
                    </li>
                </ul>
                <button>
                    More products
                </button>
            </div>
            <div className = 'best-selling-products-cards'>
                <div>
                    <div className = 'img'>

                    </div>
                    <h2>
                        Product tittle
                    </h2>
                    <h4>
                        Space for a small product description 
                    </h4>
                    <h1>
                        1.48 USD
                    </h1>
                    <button>
                        Buy now
                    </button>
                    <span>
                    </span>
                </div>
                    
                <div>
                    <div className = 'img'>
                        <span>
                            - 36 %
                        </span>
                    </div>
                    <h2>
                        Product tittle
                    </h2>
                    <h4>
                        Space for a small product description 
                    </h4>
                    <h1>
                        1.48 USD
                    </h1>
                    <button>
                        Buy now
                    </button>
                    <span>
                        48.25
                    </span>
                </div>

                <div>
                    <div className = 'img'>
                        <span>
                            - 36 %
                        </span>
                    </div>
                    <h2>
                        Product tittle
                    </h2>
                    <h4>
                        Space for a small product description 
                    </h4>
                    <h1>
                        1.48 USD
                    </h1>
                    <button>
                        Buy now
                    </button>
                    <span>
                        48.25
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BestFromFarmers;
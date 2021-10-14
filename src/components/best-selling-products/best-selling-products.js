import React from 'react';

import './best-selling-products.css';

const BestSellingProducts = () => {
    return (
        <div className = 'category-menu'>
            <div className = 'category-menu-menu'>
                <span>
                    Best selling product
                </span>
                <ul>
                    <li>
                        <a href = '/#'>Kitchen </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Meat and fish </a>
                    </li>
                        
                    <li>
                        <a href = '/#'>Special nutrition </a>
                    </li>

                    <li>
                        <a href = '/#'>Pharmacy </a>
                    </li>

                    <li>
                        <a href = '/#'>Baby </a>
                    </li>
                </ul>
                <button>
                    More products
                </button>
            </div>
            <div className = 'best-selling-products-cards'>
                <div>
                    <div className = 'img'>
                        <span>
                            
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

export default BestSellingProducts;
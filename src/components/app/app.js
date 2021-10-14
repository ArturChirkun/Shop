import React from "react";

import './app.css';

import Header from "../header/header";
import Menu from "../menu";
import CategoryMenu from "../category-menu";
import BestSellingProducts from "../best-selling-products";
import BestFromFarmers from "../best-from-farmers";

const App = () => {

    return (
        <div className = 'app'>
            <Header />
            <Menu />
            <CategoryMenu />
            <BestSellingProducts />
            <BestFromFarmers />
        </div>
    );
}

export default App;
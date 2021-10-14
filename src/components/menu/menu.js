import React from 'react';

import './menu.css';

const Menu = () => {

    return (
        <div className = 'menu'>
            <ul>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Bakery</option>
                        <option value="2">p2</option>
                    </select> 
                </li>

                <li>
                <select size="1">
                        <option  selected = 'selected' disabled value="1">Fruit and vegetables</option>
                        <option value="2">p2</option>
                    </select>  
                </li>
                <li>
                <select size="1">
                        <option  selected = 'selected' disabled value="1">Meat and fish</option>
                        <option value="2">p2</option>
                    </select> 
                </li>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Drinks</option>
                        <option value="2">p2</option>
                    </select> 
                </li>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Kitchen</option>
                        <option value="2">p2</option>
                    </select> 
                </li>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Special nutrition</option>
                        <option value="2">p2</option>
                    </select> 
                </li>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Baby </option>
                        <option value="2">p2</option>
                    </select> 
                </li>
                <li>
                    <select size="1">
                        <option  selected = 'selected' disabled value="1">Pharmacy</option>
                        <option value="2">p2</option>
                    </select> 
                </li>
            </ul>
        </div>
    );
};

export default Menu;
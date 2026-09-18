import React, { useState } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect, useHistory
} from 'react-router-dom';

import Shop from '../src/components/Shop';
import products from '../src/products.json'
import ShopSort from '../src/components/ShopSort';

const Task04 = () => {
    const history = useHistory();

    const handleChange = (e) => {
        history.push('/task04/' + e.target.value)
    }
    
    return (
        <Router basename='/task04'>
            <section>
                <h1>Task04</h1>
                <select name="" id="" onChange={handleChange}>
                    <option value="">Sort by</option>
                    <option value="high">Price high</option>
                    <option value="low">Price low</option>
                </select>
            </section>
            <Route path='/:name?'>
                <ShopSort products={products} />
            </Route>
        </Router>
    );
}

export default Task04;


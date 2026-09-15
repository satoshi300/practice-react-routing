import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Shop = ({ products }) => {
    const { name } = useParams();
    const displayedProducts = name ? products.filter(item => item.category.toLowerCase() === name.toLowerCase()) : products;

    return (
        <section>
            {displayedProducts.map(p => <Product {...p} />)}
        </section>
    );
}

export default Shop;

import React from "react";
import { useParams } from "react-router-dom";
import products from '../products.json'

const Product = () => {
    const { alias, id } = useParams();
    const [product = null] = products.filter(prod => prod.id === parseInt(id))

    if (product === null) {
        return "Nie ma takiego produktu"
    }

    const { name, description } = product;
    return (
        <article data-id={id} data-alias={alias}>
            <h1>{name}</h1>
            <p>{description}</p>
        </article>
    )
}

export default Product;
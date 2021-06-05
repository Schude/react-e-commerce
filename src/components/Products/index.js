import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "./styles";
const ProductContainer = ({ products,handleFav,handleCart }) => {
    return (
            <Container> 
            {products &&
                products.map((product) => <ProductCard key = {product.id} {...product} handleCart = {handleCart} handleFav = {handleFav} />)}
                </Container>
    );
};

export default ProductContainer;

import React from 'react';
import ProductCard from './ProductCard';
import {Container} from './styles';
const ProductContainer = ({
    products,
    handleFav,
    handleCart,
    handleIncrement,
    handleDecrement,
}) => {
    return (
        <Container>
            {products &&
                products.map((product) => (
                    <ProductCard
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        key={product.id}
                        {...product}
                        handleCart={handleCart}
                        handleFav={handleFav}
                    />
                ))}
        </Container>
    );
};

export default ProductContainer;

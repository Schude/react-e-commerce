import React from 'react';
import ProductContainer from '../Products';
import {Button} from '../Products/ProductCard/styles';
const Favorites = ({
    favorites,
    handleFav,
    handleIncrement,
    handleDecrement,
    clear,
}) => {
    return (
        <>
            {favorites.length !== 0 ? (
                <>
                    <ProductContainer
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        handleFav={handleFav}
                        products={favorites}
                    />
                    <Button onClick={clear}>Clear Favorites</Button>
                </>
            ) : (
                <h1> There's no favorite product! </h1>
            )}
        </>
    );
};

export default Favorites;

import React from "react";
import ProductContainer from "../Products";
import { Button } from "../Products/ProductCard/styles";
const Favorites = ({ favorites, handleFav, handleCart, clear }) => {
    console.log(favorites);
    return (
        <>
            {favorites.length !== 0 ? (
                <>
                    <ProductContainer
                        handleCart={handleCart}
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

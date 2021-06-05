import React from "react";

import ProductContainer from "../Products";
const Favorites = ({ favorites, handleFav, handleCart }) => {
    console.log(favorites);
    return (
        <>
            {favorites.length !== 0 ? (
                <ProductContainer
                    handleCart={handleCart}
                    handleFav={handleFav}
                    products={favorites}
                />
            ) : (
                <h1> There's no favorite product! </h1>
            )}
        </>
    );
};

export default Favorites;

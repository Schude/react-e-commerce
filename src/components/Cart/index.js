import React from "react";
import ProductContainer from "../Products";
const Cart = ({ cart, handleFav, handleCart }) => {
    return (
        <>
            {cart.length !== 0 ? (
                <ProductContainer
                    handleCart={handleCart}
                    handleFav={handleFav}
                    products={cart}
                />
            ) : (
                <h1> There's no product in your cart! </h1>
            )}
        </>
    );
};

export default Cart;

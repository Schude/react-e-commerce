import React from "react";
import ProductContainer from "../Products";
import { Button } from "../Products/ProductCard/styles";
import { Payment, CartContainer } from "./styles";
const Cart = ({ cart, handleFav, handleCart, clear }) => {
    const calculateTotalPrice = () => {
        let totalPrice = cart.reduce(function (accumulator, item) {
            return accumulator + item.price;
        }, 0);
        return totalPrice;
    };

    return (
        <>
            {cart.length !== 0 ? (
                <CartContainer>
                    <ProductContainer
                        handleCart={handleCart}
                        handleFav={handleFav}
                        products={cart}
                    />
                    <Payment>
                        <p> Total Price: {calculateTotalPrice()} $</p>

                        <Button onClick={clear} width="250px">
                            {" "}
                            Clear Cart
                        </Button>
                        <Button width="250px"> Purchase</Button>
                    </Payment>
                </CartContainer>
            ) : (
                <h1> There's no product in your cart! </h1>
            )}
        </>
    );
};

export default Cart;

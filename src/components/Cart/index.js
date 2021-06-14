import React from 'react';
import ProductContainer from '../Products';
import {Button} from '../Products/ProductCard/styles';
import {Payment, CartContainer} from './styles';
const Cart = ({
    cart,
    handleFav,
    clear,
    handleIncrement,
    handleDecrement,
}) => {
    const calculateTotalPrice = () => {
        let totalPrice = cart.reduce((accumulator, item) => {
            return accumulator + item.price * item.cart_count;
        }, 0);
        return totalPrice;
    };

    return (
        <>
            {cart.length !== 0 ? (
                <CartContainer>
                    <ProductContainer
                        handleFav={handleFav}
                        products={cart}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                    <Payment>
                        <p> Total Price: {calculateTotalPrice()} $</p>

                        <Button onClick={clear} width="250px">
                            {' '}
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

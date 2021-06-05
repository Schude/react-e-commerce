import "./App.css";
import Layout from "./components/Layout";
import ProductContainer from "./components/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
function App() {
    const [products, setProducts] = useState();
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        res.data.map((product) => {
            product.isFav = false;
            product.inCart = false;
            return product;
        });
        setProducts(res.data);
    };

    const getSingleProduct = (id) => {
        return products.find((post) => post.id === parseInt(id));
    };

    const handleFavorite = (e) => {
        console.log("hav");
        const product = getSingleProduct(e.target.id);
        product.isFav = !product.isFav;
        setProducts([...products]);
    };
    const handleCart = (e) => {
        const product = getSingleProduct(e.target.id);
        product.inCart = !product.inCart;
        setProducts([...products]);
    };
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Layout
                        count={
                            products &&
                            products.filter(
                                (product) => product.inCart === true
                            ).length
                        }
                    >
                        <ProductContainer
                            handleCart={handleCart}
                            handleFav={handleFavorite}
                            products={products}
                        />
                    </Layout>
                </Route>
                <Route exact path="/product/:id">
                    <Layout
                        count={
                            products &&
                            products.filter(
                                (product) => product.inCart === true
                            ).length
                        }
                    >
                        <Detail
                            handleCart={handleCart}
                            handleFav={handleFavorite}
                            get={getSingleProduct}
                        ></Detail>
                    </Layout>
                </Route>
                <Route exact path="/favorites">
                    <Layout
                        count={
                            products &&
                            products.filter(
                                (product) => product.inCart === true
                            ).length
                        }
                    >
                        <Favorites
                            handleCart={handleCart}
                            handleFav={handleFavorite}
                            favorites={
                                products &&
                                products.filter(
                                    (product) => product.isFav === true
                                )
                            }
                        ></Favorites>
                    </Layout>
                </Route>
                <Route exact path="/cart">
                    <Layout
                        count={
                            products &&
                            products.filter(
                                (product) => product.inCart === true
                            ).length
                        }
                    >
                        <Cart
                            handleCart={handleCart}
                            handleFav={handleFavorite}
                            cart={
                                products &&
                                products.filter(
                                    (product) => product.inCart === true
                                )
                            }
                        ></Cart>
                    </Layout>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

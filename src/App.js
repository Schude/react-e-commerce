import "./App.css";
import Layout from "./components/Layout";
import ProductContainer from "./components/Products";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    const [activeCategory, setActiveCategory] = useState("All");
    useEffect(() => {
        getProducts();
    }, []);

    const getCategories = useCallback(() => {
        let categories = ["All"];
        // eslint-disable-next-line array-callback-return
        products.map((item) => {
            if (!categories.includes(item.category)) {
                categories = [...categories, item.category];
            }
        });
        return categories;
    }, [products]);

    useEffect(() => {
        setCategories((prev) => (prev = getCategories()));
    }, [getCategories]);

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

    const filteredProducts = () => {
        let filteredProducts = products.filter(
            (product) => product.category === activeCategory
        );
        if (activeCategory === "All") {
            filteredProducts = products;
        }
        return filteredProducts;
    };
    const handleFavorite = (e) => {
        const product = getSingleProduct(e.target.id);
        product.isFav = !product.isFav;
        setProducts([...products]);
    };
    const handleCart = (e) => {
        const product = getSingleProduct(e.target.id);
        product.inCart = !product.inCart;
        setProducts([...products]);
    };
    const clearCart = () => {
        const cartItems = products.filter((product) => product.inCart === true);
        cartItems.map((item) => (item.inCart = false));
        setProducts([...products]);
    };
    const clearFavorites = () => {
        const cartItems = products.filter((product) => product.isFav === true);
        cartItems.map((item) => (item.isFav = false));
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
                        <Categories
                            click={setActiveCategory}
                            categories={categories}
                        />
                        <ProductContainer
                            handleCart={handleCart}
                            handleFav={handleFavorite}
                            products={filteredProducts()}
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
                            clear = {clearFavorites}
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
                            clear={clearCart}
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

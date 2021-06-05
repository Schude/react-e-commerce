import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Image, ImageBox } from "./styles";
import { Button } from "../Products/ProductCard/styles";
const Index = ({ get, handleFav, handleCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        setProduct(get(id));
    }, [get, id]);
    return (
        <>
            {product && (
                <Container>
                    <ImageBox>
                        <Image src={product.image} />
                    </ImageBox>
                    <Content>
                        <h1> {product.title} </h1>
                        <h1> {product.price}$ </h1>
                        <p> {product.description} </p>
                        <Button
                            onClick={handleCart}
                            id={product.id}
                            hBGcolor="#3257e1"
                            bgcolor="#3ba0db"
                        >
                            {product.inCart ? "Sepetten Çıkart" : "Sepete Ekle"}
                        </Button>
                        <Button onClick={handleFav} id={product.id}>
                            {" "}
                            {product.isFav
                                ? "Favorilerden Çıkart"
                                : "Favorilere Ekle"}{" "}
                        </Button>
                    </Content>
                </Container>
            )}
        </>
    );
};

export default Index;

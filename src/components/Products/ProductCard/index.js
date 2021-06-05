import React from "react";
import { Card, Button, Content, ImgBox, Text, Image } from "./styles";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <Card>
            <ImgBox>
                <Image src={props.image} />
            </ImgBox>

            <Content>
                <Link to={`/product/${props.id}`}>
                    {" "}
                    <Text> {props.title} </Text>
                </Link>

                <Text> {props.price}$ </Text>
                <Button
                    id={props.id}
                    onClick={props.handleCart}
                    hBGcolor="#2280f6"
                    bgcolor="#3ba0db"
                >
                    {" "}
                    {props.inCart ? "Sepetten Çıkart" : "Sepete Ekle"}
                </Button>
                <Button id={props.id} onClick={props.handleFav}>
                    {props.isFav ? "Favorilerden Çıkart" : "Favorilere Ekle"}
                </Button>
            </Content>
        </Card>
    );
};

export default ProductCard;

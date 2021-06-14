import React from 'react';
import {Card, Button, Content, ImgBox, Text, Image} from './styles';
import {Link} from 'react-router-dom';
import Counter from './Counter';

const ProductCard = (props) => {
    return (
        <Card>
            <ImgBox>
                <Image src={props.image} />
            </ImgBox>

            <Content>
                <Link to={`/product/${props.id}`}>
                    {' '}
                    <Text> {props.title} </Text>
                </Link>

                <Text> {props.price}$ </Text>

                {props.cart_count > 0 ? (
                    <Counter
                        onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement}
                        id={props.id}
                        count={props.cart_count}
                    />
                ) : (
                    <Button
                        id={props.id}
                        onClick={props.onIncrement}
                        hBGcolor="#2280f6"
                        bgcolor="#3ba0db"
                    >
                        {'Sepete Ekle'}
                    </Button>
                )}

                <Button id={props.id} onClick={props.handleFav}>
                    {props.isFav ? 'Favorilerden Çıkart' : 'Favorilere Ekle'}
                </Button>
            </Content>
        </Card>
    );
};

export default ProductCard;

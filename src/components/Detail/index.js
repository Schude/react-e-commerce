import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Content, Image, ImageBox} from './styles';
import {Button} from '../Products/ProductCard/styles';
import Counter from '../Products/ProductCard/Counter';
const Index = ({get, handleFav, handleIncrement, handleDecrement}) => {
    const {id} = useParams();
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
                        {product.cart_count > 0 ? (
                            <Counter
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                                id={product.id}
                                count={product.cart_count}
                            />
                        ) : (
                            <Button
                                id={product.id}
                                onClick={handleIncrement}
                                hBGcolor="#2280f6"
                                bgcolor="#3ba0db"
                            >
                                {'Sepete Ekle'}
                            </Button>
                        )}
                        <Button onClick={handleFav} id={product.id}>
                            {' '}
                            {product.isFav
                                ? 'Favorilerden Çıkart'
                                : 'Favorilere Ekle'}{' '}
                        </Button>
                    </Content>
                </Container>
            )}
        </>
    );
};

export default Index;

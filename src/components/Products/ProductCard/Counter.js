import React from 'react';
import {Button, Text, CounterWrapper} from './styles';
const Counter = ({onIncrement, onDecrement, id, count}) => {
    return (
        <CounterWrapper>
            <Button id={id} onClick={onDecrement} width="40px">
                -
            </Button>
            <Text> {count} </Text>
            <Button
                id={id}
                onClick={onIncrement}
                hBGcolor="#2280f6"
                bgcolor="#3ba0db"
                width="40px"
            >
                {' '}
                +{' '}
            </Button>
        </CounterWrapper>
    );
};

export default Counter;

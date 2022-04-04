import React from 'react';
import { Container } from './styles';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    return(
        <Container>
            <Button
                onPress={() => navigation.navigate('Payment')}
                title="Ir para Payment"
                color="#16a085"
            />
        </Container>
    )
};

export default Cart;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { Container } from './styles';

const Register = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Ir para Login"
                color="#841584"
            />
        </Container>
    )
};

export default Register;
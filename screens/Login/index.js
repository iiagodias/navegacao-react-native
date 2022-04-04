import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { Container } from './styles';

const Login = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Register')}
                title="Ir para Register"
                color="#841584"
            />
        </Container>
    )
};

export default Login;
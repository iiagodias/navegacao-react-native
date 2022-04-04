import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { Container } from './styles';

const Login = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Tabs')}
                title="Ir para tabs"
                color="#841584"
            />
             <Button
                onPress={() => navigation.navigate('LoginTopTabs')}
                title="Ir para Login"
                color="#f39c12"
            />
        </Container>
    )
};

export default Login;
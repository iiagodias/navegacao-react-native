import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useIsFocused,useNavigation, CommonActions } from '@react-navigation/native';
import { Container } from './styles';

const Conclusion = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if(!isFocused){
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Cart' }
                ],
            }))
        }
    }, [isFocused]);

    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Ir para Home"
                color="#f39c12"
            />
        </Container>
    )
};

export default Conclusion;
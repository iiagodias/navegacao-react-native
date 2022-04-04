import React from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Container } from './styles';
import { Button } from 'react-native';

const Payment = () => {
    const navigation = useNavigation();
    const resetAction =  CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Conclusion' }
        ],
      })

    return (
        <Container>
            <Button
                onPress={() => navigation.dispatch(resetAction)}
                title="Ir para Conclusion"
                color="#e74c3c"
            />
        </Container>
    )
};

export default Payment;
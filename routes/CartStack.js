import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conclusion from '../screens/Conclusion';
import Cart from '../screens/Cart';
import Payment from '../screens/Payment';

const Stack = createNativeStackNavigator();

const CartStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Conclusion" component={Conclusion} />
        <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
);

export default CartStack;
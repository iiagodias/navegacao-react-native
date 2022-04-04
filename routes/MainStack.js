import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/';
import MainTabs from './MainTabs';
import LoginTopTabs from './LoginTopTabs';

const Stack = createNativeStackNavigator();

const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Tabs" component={MainTabs} />
        <Stack.Screen name="LoginTopTabs" component={LoginTopTabs} />
    </Stack.Navigator>
);

export default MainStack;
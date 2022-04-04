import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createMaterialTopTabNavigator();

const LoginTopTabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
);

export default LoginTopTabs;
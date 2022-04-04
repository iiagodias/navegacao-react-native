import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
);

export default MainDrawer;
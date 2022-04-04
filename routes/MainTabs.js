import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import CartStack from './CartStack';
import MainDrawer from './MainDrawer';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator >
        <Tab.Screen  name="HomeDrawer" component={MainDrawer} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="CartTab" component={CartStack} />
    </Tab.Navigator>
);

export default MainTabs;
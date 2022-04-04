
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './routes/MainStack';


const App = () => {
  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  );
};


export default App;

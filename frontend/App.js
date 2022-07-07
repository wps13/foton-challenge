import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/modules/Auth/components/Login/Index';
import Register from './src/modules/Auth/components/Register/Index';
import Product from './src/modules/Create/components/Product/Index';
import Home from './src/modules/Home/Index';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="createProduct" component={Product} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

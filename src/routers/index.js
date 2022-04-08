import React from 'react';
import type {Node} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator();

const Routers: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
      <Loading />
    </NavigationContainer>
  );
}

export default Routers;

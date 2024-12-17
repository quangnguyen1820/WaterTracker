import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import { ContantsNavigator } from './ContantsNavigator';
import SplashScreen from '../screen/SplashScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ContantsNavigator.SPLASH_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ContantsNavigator.HOME_SCREEN}
                component={HomeScreen}
            />
            <Stack.Screen
                name={ContantsNavigator.SPLASH_SCREEN}
                component={SplashScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
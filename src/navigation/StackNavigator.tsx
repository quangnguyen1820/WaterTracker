import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import { ContantsNavigator } from './ContantsNavigator';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/auth/LoginScreen';

const Stack = createStackNavigator();
const authStack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ContantsNavigator.AUTHENTICATION_STATE}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ContantsNavigator.MAIN_STATE}
                component={StackMainNavigator}
            />
            <Stack.Screen
                name={ContantsNavigator.AUTHENTICATION_STATE}
                component={StackAuthNavigator}
            />
        </Stack.Navigator>
    );
};

const StackMainNavigator = () => {
    return (
        <React.Fragment>
            <Stack.Screen
                name={ContantsNavigator.HOME_SCREEN}
                component={HomeScreen}
            />
        </React.Fragment>
    )
}

const StackAuthNavigator = () => {
    return (
        <authStack.Navigator
            initialRouteName={ContantsNavigator.SPLASH_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ContantsNavigator.WELCOME_SCREEN}
                component={WelcomeScreen}
            />
            <Stack.Screen
                name={ContantsNavigator.SPLASH_SCREEN}
                component={SplashScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.LOGIN_SCREEN}
                component={LoginScreen}
            />
        </authStack.Navigator>
    );
};

export default StackNavigator;
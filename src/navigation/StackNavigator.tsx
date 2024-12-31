import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import { ContantsNavigator } from './ContantsNavigator';
import { RootState } from '../redux/store';
import LoginScreen from '../screen/auth/login/LoginScreen';
import { useSelector } from 'react-redux';
import OnBoardingScreen from '../screen/OnboardingScreen';
import SplashScreen from '../screen/SplashScreen';

const Stack = createStackNavigator();
const authStack = createStackNavigator();

const StackNavigator = () => {
    const isLoggedIn = useSelector((state: RootState) => state.config.isLoggedIn);

    return (
        <Stack.Navigator
            initialRouteName={isLoggedIn
                ? ContantsNavigator.MAIN_STATE
                : ContantsNavigator.AUTHENTICATION_STATE}
            screenOptions={{
                headerShown: false
            }}
        >
            {
                isLoggedIn ? (
                    <Stack.Screen
                        name={ContantsNavigator.MAIN_STATE}
                        component={StackMainNavigator}
                    />

                ) :
                    <Stack.Screen
                        name={ContantsNavigator.AUTHENTICATION_STATE}
                        component={StackAuthNavigator}
                    />
            }
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
                name={ContantsNavigator.ONBOARDING_SCREEN}
                component={OnBoardingScreen}
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
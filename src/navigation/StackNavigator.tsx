import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/home/HomeScreen';
import { ContantsNavigator } from './ContantsNavigator';
import { RootState } from '../redux/store';
import LoginScreen from '@screens/auth/login/LoginScreen';
import { useSelector } from 'react-redux';
import OnBoardingScreen from '@screens/OnboardingScreen';
import SplashScreen from '@screens/splash/SplashScreen';
import RegisterScreen from '@screens/auth/register/RegisterScreen';

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

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ContantsNavigator.HOME_SCREEN}
                options={{ gestureEnabled: false }}
                component={HomeScreen}
            />
        </Stack.Navigator>

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
                options={{ gestureEnabled: false }}
                component={LoginScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.REGISTER_SCREEN}
                component={RegisterScreen}
            />
        </authStack.Navigator>
    );
};

export default StackNavigator;
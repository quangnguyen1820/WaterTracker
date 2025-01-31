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
import ForgotPasswordScreen from '@screens/auth/forgotPassword/ForgotPasswordScreen';
import VertificationCodeScreen from '@screens/auth/register/VertificationCodeScreen';
import VeritifiredSuccessScreen from '@screens/auth/vetifiredSuccess/VeritifiredSuccessScreen';
import OTPCodeForgotScreen from '@screens/auth/forgotPassword/OTPCodeForgotScreen';
import ResetPasswordScreen from '@screens/auth/forgotPassword/ResetPasswordScreen';

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
            <authStack.Screen
                name={ContantsNavigator.VERTIFICATION_CODE_SCREEN}
                options={{ gestureEnabled: false }}
                component={VertificationCodeScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.FORGOT_PASSWORD_SCREEN}
                component={ForgotPasswordScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.VERIFIRED_SUCCESS_SCREEN}
                component={VeritifiredSuccessScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.OTP_CODE_FORGOT_SCREEN}
                component={OTPCodeForgotScreen}
            />
            <authStack.Screen
                name={ContantsNavigator.RESET_PASSWORD_SCREEN}
                component={ResetPasswordScreen}
            />
        </authStack.Navigator>
    );
};

export default StackNavigator;
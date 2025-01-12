import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { ContantsNavigator } from '../../navigation/ContantsNavigator';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { initalConfig } from '../../redux/slices/configSlice';
import styles from '@styles/SplashStyles';

interface SplashScreenProps {
    navigation: NavigationProp<ContantsNavigator>
}

const SplashScreen = (props: SplashScreenProps) => {

    const { navigation } = props
    const dispatch = useDispatch();

    const backgroundImage = require('@assets/images/background.png')

    const title = 'Drops Water Tracker';
    const content = `Stay hydrated and track your\ndaily water intake`;

    const hasCompletedOnboarding = useSelector((state: RootState) => state.config.hasCompletedOnboarding);

    useEffect(() => {
        dispatch(initalConfig({}))
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (hasCompletedOnboarding) {
                navigation.navigate(ContantsNavigator.LOGIN_SCREEN)
            } else {
                navigation.navigate(ContantsNavigator.ONBOARDING_SCREEN)
            }
        }, 2000);
        return () => {
            clearTimeout(timeout)
        }
    }, [hasCompletedOnboarding])

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'light-content'}
                hidden={true}
            />
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
            />
            <View style={styles.viewContent}>
                <Text style={styles.textHeader}>{title}</Text>
                <Text style={styles.textContent}>{content}</Text>
            </View>
        </View>
    )
}

export default SplashScreen
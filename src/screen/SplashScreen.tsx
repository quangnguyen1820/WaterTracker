import { View, Text, StyleSheet, ImageBackground, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { height, width } from '../utils/constants';
import { ColorsScreen, ColorsText } from '../themes/colors';
import { typography } from '../styles/typography';
import { ContantsNavigator } from '../navigation/ContantsNavigator';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { initalConfig } from '../redux/slices/configSlice';

interface SplashScreenProps {
    navigation: NavigationProp<ContantsNavigator>
}

const SplashScreen = (props: SplashScreenProps) => {

    const { navigation } = props
    const dispatch = useDispatch();

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
                source={require('../assets/images/background.png')}
                style={styles.backgroundImage}
            />
            <View style={styles.viewContent}>
                <Text style={styles.textHeader}>{title}</Text>
                <Text style={styles.textContent}>{content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsScreen.background
    },
    backgroundImage: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0
    },
    imageLogo: {
        width: 140,
        height: 150,
        marginBottom: 20
    },
    viewContent: {
        width: '100%',
        alignItems: 'center',
        paddingTop: height * 0.21
    },
    textHeader: {
        ...typography.titleBoldH1,
        color: ColorsText.white,
        letterSpacing: 0.7
    },
    textContent: {
        ...typography.textRegular,
        color: ColorsText.white,
        letterSpacing: 0.7,
        textAlign: 'center',
        marginTop: 8
    }
});

export default SplashScreen
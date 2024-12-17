import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { height, width } from '../utils/constants';
import { ColorsScreen } from '../themes/colors';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/images/logo.png')}
                style={{ width: width * 0.6, height: width * 0.5 }}
            /> */}
            <ImageBackground
                source={require('../assets/images/background.png')}
                style={styles.backgroundImage}
            />

            <View style={{ width: '100%', borderWidth: 1, alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.imageLogo}
                />
                <Text>Drops Water Tracker</Text>
                <Text>Stay hydrated and track your daily water intake</Text>
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
        height: 160,
        marginBottom: 20
    }
});

export default SplashScreen
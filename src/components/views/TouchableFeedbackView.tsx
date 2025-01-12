import { View, Text, TouchableNativeFeedback, StyleSheet, Keyboard, StatusBar, StatusBarStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { height, width } from '@utils/constants';

interface TouchableFeedbackViewProps {
    children: ReactNode
    barStyle?: StatusBarStyle
    barHide?: boolean
    barBackground?: string
}

const TouchableFeedbackView = (props: TouchableFeedbackViewProps) => {

    const {
        children,
        barStyle = 'dark-content',
        barHide = false,
        barBackground = "#61dafb"
    } = props;

    const handleDismiss = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableNativeFeedback
            onPress={handleDismiss}
            style={styles.container}
        >
            <View style={styles.content}>
                <StatusBar
                    animated={true}
                    backgroundColor={barBackground}
                    barStyle={barStyle}
                    showHideTransition={'none'}
                    hidden={barHide}
                />
                {children}
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height
    },
    content: {
        flex: 1
    }
});

export default TouchableFeedbackView
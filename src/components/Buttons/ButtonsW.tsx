import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ColorsScreen, ColorsText } from '../../themes/colors';
import { typography } from '../../styles/typography';

interface ButtonsWProps {
    onPress: () => void
    title: string
}

const ButtonsW = (props: ButtonsWProps) => {

    const { onPress, title } = props;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsScreen.background
    },
    textButton: {
        ...typography.textRegular,
        color: ColorsText.white
    }
});

export default ButtonsW
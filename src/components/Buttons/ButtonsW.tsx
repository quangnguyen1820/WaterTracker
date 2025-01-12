import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { ColorsScreen, ColorsText } from '../../themes/colors';
import { typography } from '../../styles/typography';
import { getSize } from '@styles/sizes';

interface ButtonsWProps {
    onPress: () => void
    title: string
    style?: ViewStyle,
    disabled?: boolean
}

const ButtonsW = (props: ButtonsWProps) => {

    const { onPress, title, style, disabled } = props;

    return (
        <TouchableOpacity
            style={[styles.container, { ...style }]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: getSize(60),
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
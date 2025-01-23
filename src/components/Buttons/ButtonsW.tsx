import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { ColorsButton, ColorsScreen, ColorsText } from '../../themes/colors';
import { typography } from '../../styles/typography';
import { getSize } from '@styles/sizes';

interface ButtonsWProps {
    onPress: () => void
    title: string
    style?: ViewStyle,
    disabled?: boolean,
    type?: 'second' | 'primary'
}

const ButtonsW = (props: ButtonsWProps) => {

    const { onPress, title, style, disabled, type = 'primary' } = props;

    return (
        <TouchableOpacity
            style={[type ? disabled ? styles.containerDisable : styles.containerPrimary : styles.containerSecod, { ...style }]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerDisable: {
        width: '100%',
        height: getSize(60),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsButton.disable
    },
    containerPrimary: {
        width: '100%',
        height: getSize(60),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsScreen.background
    },
    containerSecod: {
        width: '100%',
        height: getSize(60),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsScreen.background
    },
    textButton: {
        ...typography.titleRegularH4,
        color: ColorsText.white
    }
});

export default ButtonsW
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData, ViewStyle, Keyboard } from 'react-native'
import React, { useMemo, useState } from 'react'
import { typography } from '@styles/typography';
import { ColorsInput, ColorsText } from '@themes/colors';

interface PinInputProps {
    style?: ViewStyle
    onChangeValue: (value: string) => void
}

const PinInput = (props: PinInputProps) => {

    const { style = {}, onChangeValue } = props;

    const [pin, setPin] = useState<string[]>(['', '', '', '', '', ''])
    const inputs = useMemo(() => Array(6).fill(null), []);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const handleInputChange = (text: string, index: number) => {
        if (text.length > 1) return;

        const newPin = [...pin];
        newPin[index] = text;
        setPin(newPin);
        onChangeValue(newPin.join(''))

        if (newPin.join('').length === 6) {
            setFocusedIndex(null)
            Keyboard.dismiss()
        }

        if (text && index < pin.length - 1) {
            inputs[index + 1]?.focus();
        }
    }

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && pin[index] === '') {
            if (index > 0) {
                inputs[index - 1]?.focus();
            }
        }
    }

    const handleFocusInput = (index: number) => {
        setFocusedIndex(index);
    }

    return (
        <View style={[styles.container, { ...style }]}>
            {pin.map((value: string, index: number) => (
                <TextInput
                    key={index}
                    ref={(ref: any) => (inputs[index] = ref)}
                    style={[styles.textInput, {
                        borderColor: focusedIndex === index ? ColorsText.blue : ColorsInput.border
                    }]}
                    value={value}
                    maxLength={1}
                    onChangeText={(text: string) => handleInputChange(text, index)}
                    keyboardType='number-pad'
                    onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => handleKeyPress(e, index)}
                    textAlign='center'
                    selectionColor={'transparent'}
                    textAlignVertical='bottom'
                    onFocus={() => {
                        handleFocusInput(index)
                    }}
                    onBlur={() => setFocusedIndex(null)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        ...typography.titleRegularH4,
        borderWidth: 1,
        width: '14%',
        height: 70,
        borderRadius: 16,
    }
});

export default PinInput
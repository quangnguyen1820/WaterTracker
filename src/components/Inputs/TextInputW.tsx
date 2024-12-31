import { View, Text, StyleSheet, TextInput, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { ColorsInput, ColorsText } from '@themes/colors'
import { SvgXml } from 'react-native-svg'
import { svgIcon } from '@assets/svg'
import { typography } from '@styles/typography'

interface TextInputWProps {
    placeholder: string
    value: string
    onChangeText: (text: string) => void
    secureTextEntry?: boolean
    hidePassword?: boolean
    height?: number
    leftIcon?: { name: string, size?: number, color?: string }
    rightIcon?: { name: string, size?: number, color?: string }
    style?: ViewStyle
    onDismiss?: () => void
    onShowPass?: () => void
    onRight?: () => void
    isValid?: boolean
    messageValid?: string
}

const TextInputW = (props: TextInputWProps) => {

    const { placeholder, onChangeText, secureTextEntry, height, hidePassword, leftIcon, rightIcon, value, style, onDismiss, onShowPass, onRight, isValid, messageValid } = props;

    const Icon = ({ name, size = 24, color }: { name: string; size?: number, color?: string }) => (
        <SvgXml xml={svgIcon({ name, size, color })} />
    );

    const IconButton = ({ name, size = 24, color, style, onPress }: { name: string; size?: number, color?: string, style: ViewStyle, onPress: () => void }) => (
        <TouchableOpacity
            style={style}
            onPress={onPress}
        >
            <SvgXml xml={svgIcon({ name, size, color })} />
        </TouchableOpacity>
    );

    return (
        <View style={[styles.flex, {
            ...style
        }]}>
            <View style={[styles.container, {
                height: height || 60,
                borderWidth: isValid ? 1 : 0,
                borderColor: isValid ? ColorsText.valid : 'transparent'
            }]}>
                {leftIcon &&
                    <View style={styles.viewIcon}>
                        <Icon
                            name={leftIcon.name}
                            size={leftIcon.size}
                            color={leftIcon.color}
                        />
                    </View>}
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    value={value}
                />
                {value &&
                    <IconButton
                        name={'dismiss-input'}
                        style={styles.viewIconRight}
                        onPress={() => onDismiss && onDismiss()}
                    />
                }
                {secureTextEntry &&
                    <IconButton
                        name={hidePassword ? 'eye-off' : 'eye'}
                        style={styles.viewIconRight}
                        onPress={() => onShowPass && onShowPass()}
                    />
                }

                {rightIcon &&
                    <IconButton
                        name={rightIcon.name}
                        size={rightIcon.size}
                        color={rightIcon.color}
                        style={styles.viewIconRight}
                        onPress={() => onRight && onRight()}
                    />
                }
            </View>
            {
                isValid &&
                <Text style={styles.textValid}>{messageValid}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        width: '100%',
    },
    container: {
        width: '100%',
        backgroundColor: ColorsInput.input,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input: {
        flex: 1,
        height: '100%',
        paddingRight: 16,
    },
    viewIcon: {
        marginRight: 10
    },
    viewIconRight: {
        marginLeft: 8
    },
    textValid: {
        ...typography.textMsgRegular,
        color: ColorsText.valid,
        marginTop: 4
    }
});

export default TextInputW
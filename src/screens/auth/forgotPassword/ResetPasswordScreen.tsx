import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { svgIcon } from '@assets/svg'
import ButtonsW from '@components/Buttons/ButtonsW'
import TouchableFeedbackView from '@components/views/TouchableFeedbackView'
import { getSize } from '@styles/sizes'
import { SvgXml } from 'react-native-svg'
import { NavigationProp } from '@react-navigation/native'
import { ContantsNavigator } from '@navigation/ContantsNavigator'
import TextInputW from '@components/Inputs/TextInputW'
import { BaseInputState } from 'src/types/stateTypes'
import { ColorIcon } from '@themes/colors'
import { ValidationRule } from '../register/types'
import styles from '@styles/ResetPasswordStyles'

interface ResetPasswordProps {
    navigation: NavigationProp<ContantsNavigator>
}

const ResetPasswordScreen = (props: ResetPasswordProps) => {

    const { navigation } = props

    const [isHideFooter, setHideFooter] = useState(false)
    const [formState, setFormState] = useState<{
        password: BaseInputState,
        rePassword: BaseInputState
    }>(
        {
            password: { value: '', isValid: false, msgValid: '', showPassword: true },
            rePassword: { value: '', isValid: false, msgValid: '', showPassword: true },
        }
    )

    const handleOnBack = () => {
        navigation.goBack()
    }

    type ValidationRules = {
        [key in keyof typeof formState]: ValidationRule;
    };

    const validationReles: ValidationRules = {
        password: {
            required: true,
            minLength: 6,
            messages: {
                required: 'Mật khẩu được bỏ trống',
                minLength: 'Mật khẩu phải có ít nhất 6 ký tự',
                hasUpperAndLower: 'Mật khẩu phải chứa ít nhất một chữ cái viết thường và một chữ cái viết hoa',
                hasSpecialChar: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
            },
        },
        rePassword: {
            required: true,
            minLength: 6,
            messages: {
                required: 'Mật khẩu được bỏ trống',
                minLength: 'Mật khẩu phải có ít nhất 6 ký tự',
                hasUpperAndLower: 'Mật khẩu phải chứa ít nhất một chữ cái viết thường và một chữ cái viết hoa',
                hasSpecialChar: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
                passwordDoNotMatch: 'Mật khẩu không trùng khớp'
            },
        },
    }

    const validateField = (field: keyof typeof formState, value: string) => {
        const rules = validationReles[field]
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        let isValid = false;
        let msgValid = '';

        if (rules) {
            isValid = true;
            if (rules.required && value.trim() === '') {
                msgValid = rules.messages.required || '';
            } else if (rules.pattern && !rules.pattern.test(value)) {
                msgValid = rules.messages.pattern || '';
            } else if (rules.minLength && value.length < rules.minLength) {
                msgValid = rules.messages.minLength || '';
            } else if (!hasUppercase || !hasLowercase) {
                msgValid = rules.messages.hasUpperAndLower || '';
            } else if (!hasSpecialChar) {
                msgValid = rules.messages.hasSpecialChar || '';
            } else if (field === 'rePassword' && value !== formState.password.value) {
                msgValid = rules.messages.passwordDoNotMatch || '';
            } else {
                isValid = false;
            }
        }

        return { isValid, msgValid };
    }

    const handleInputChange = (field: keyof typeof formState, value: string) => {
        const { isValid, msgValid } = validateField(field, value);
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
                isValid,
                msgValid
            }
        }))
    }

    const handleResetPassword = () => {
        navigation.navigate(ContantsNavigator.OTP_CODE_FORGOT_SCREEN)
    }

    const handleShowPassword = (field: keyof typeof formState) => {
        setFormState({
            ...formState,
            [field]: {
                ...formState[field],
                showPassword: !formState[field].showPassword
            }
        })
    }

    const colorIcon = ColorIcon.icon

    const isFormValid = Object.values(formState).some((field) => field.value === '' || field.isValid);

    return (
        <TouchableFeedbackView>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-start' }}
                        onPress={handleOnBack}
                    >
                        <SvgXml
                            xml={svgIcon({
                                name: 'arrow_left',
                                size: getSize(30)
                            })}
                        />
                    </TouchableOpacity>
                    <View style={styles.contentTitle}>
                        <Text style={styles.textNameScreen}>
                            Forgot password
                        </Text>
                        <Text style={styles.textDescribe}>
                            Enter your phone number to reset your account password
                        </Text>
                    </View>
                    <TextInputW
                        placeholder='Password'
                        secureTextEntry={true}
                        leftIcon={{
                            name: 'password',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onChangeText={(text: string) => handleInputChange('password', text)}
                        value={formState.password.value}
                        style={styles.viewInput}
                        onDismiss={() => handleInputChange('password', '')}
                        isValid={formState.password.isValid}
                        messageValid={formState.password.msgValid}
                        onShowPass={() => handleShowPassword('password')}
                        hidePassword={formState.password.showPassword}
                    />
                    <TextInputW
                        placeholder='Re-password'
                        secureTextEntry={true}
                        leftIcon={{
                            name: 'password',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onChangeText={(text: string) => handleInputChange('rePassword', text)}
                        value={formState.rePassword.value}
                        style={styles.viewInput}
                        onDismiss={() => handleInputChange('rePassword', '')}
                        isValid={formState.rePassword.isValid}
                        messageValid={formState.rePassword.msgValid}
                        onShowPass={() => handleShowPassword('rePassword')}
                        hidePassword={formState.rePassword.showPassword}
                    />

                    {
                        !isHideFooter &&
                        (<View style={styles.viewButton}>
                            <ButtonsW
                                disabled={isFormValid}
                                onPress={handleResetPassword}
                                title={'Confirm'}
                            />
                        </View>)
                    }

                </View>


            </SafeAreaView>
        </TouchableFeedbackView>
    )
}

export default ResetPasswordScreen
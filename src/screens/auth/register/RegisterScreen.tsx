import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TouchableFeedbackView from '@components/views/TouchableFeedbackView'
import styles from '@styles/RegisterStyles'
import ButtonsW from '@components/Buttons/ButtonsW'
import TextInputW from '@components/Inputs/TextInputW'
import { ColorIcon } from '@themes/colors'
import { ContantsNavigator } from '@navigation/ContantsNavigator'
import { useDispatch } from 'react-redux'
import { BaseInputState } from 'src/types/stateTypes'
import { RegisterScreenProps, ValidationRule } from './types'
import { getSize } from '@styles/sizes'

const RegisterScreen = (props: RegisterScreenProps) => {

    const { navigation } = props;
    const dispatch = useDispatch();

    const [formState, setFormState] = useState<{
        email: BaseInputState,
        fullName: BaseInputState,
        phone: BaseInputState,
        password: BaseInputState
    }>(
        {
            email: { value: '', isValid: false, msgValid: '' },
            password: { value: '', isValid: false, msgValid: '', showPassword: true },
            fullName: { value: '', isValid: false, msgValid: '' },
            phone: { value: '', isValid: false, msgValid: '' },
        }
    )

    type ValidationRules = {
        [key in keyof typeof formState]: ValidationRule;
    };

    useEffect(() => {
        console.log('===== LOGIN_SCREEN =====');
    }, [])

    const validationReles: ValidationRules = {
        email: {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            messages: {
                required: 'Email không được bỏ trống',
                pattern: 'Email không đúng định dạng',
            },
        },
        password: {
            required: true,
            minLength: 6,
            messages: {
                required: 'Mật khẩu được bỏ trống',
                minLength: 'Mật khẩu phải có ít nhất 6 ký tự',
            },
        },
        fullName: {
            required: true,
            messages: {
                required: 'Họ tên không được để trống',
            },
        },
        phone: {
            required: true,
            pattern: /^[0-9]{10,11}$/,
            messages: {
                required: 'Số điện thoại được bỏ trống',
                pattern: 'Số điện thoại không hợp lệ',
            },
        },
    }

    const validateField = (field: keyof typeof formState, value: string) => {
        const rules = validationReles[field]
        let isValid = false;
        let msgValid = '';

        if (rules) {
            if (rules.required && value.trim() === '') {
                isValid = true;
                msgValid = rules.messages.required || '';
            } else if (rules.pattern && !rules.pattern.test(value)) {
                isValid = true;
                msgValid = rules.messages.pattern || '';
            } else if (rules.minLength && value.length < rules.minLength) {
                isValid = true;
                msgValid = rules.messages.minLength || '';
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

    const handleShowPassword = () => {
        setFormState({
            ...formState,
            password: {
                ...formState.password,
                showPassword: !formState.password.showPassword
            }
        })
    }

    const handleRegister = () => {
        navigation.navigate(ContantsNavigator.VERTIFICATION_CODE_SCREEN)
    }

    const handleHasLogin = () => {
        navigation.navigate(ContantsNavigator.LOGIN_SCREEN)
    }

    const colorIcon = ColorIcon.icon

    const isFormValid = Object.values(formState).some((field) => field.value === '' || field.isValid);

    return (
        <TouchableFeedbackView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.textNameScreen}>
                        Create an account
                    </Text>
                    <Text style={styles.textDescribe}>
                        Securely login to your account
                    </Text>
                    <TextInputW
                        placeholder='Full name'
                        onChangeText={(text: string) => handleInputChange('fullName', text)}
                        value={formState.fullName.value}
                        style={styles.viewInput}
                        leftIcon={{
                            name: 'user',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onDismiss={() => handleInputChange('fullName', '')}
                        isValid={formState.fullName.isValid}
                        messageValid={formState.fullName.msgValid}
                    />
                    <TextInputW
                        placeholder='Email'
                        onChangeText={(text: string) => handleInputChange('email', text)}
                        value={formState.email.value}
                        style={styles.viewInput}
                        leftIcon={{
                            name: 'email',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onDismiss={() => handleInputChange('email', '')}
                        isValid={formState.email.isValid}
                        messageValid={formState.email.msgValid}
                    />
                    <TextInputW
                        placeholder='Phone'
                        onChangeText={(text: string) => handleInputChange('phone', text)}
                        value={formState.phone.value}
                        style={styles.viewInput}
                        leftIcon={{
                            name: 'phone',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onDismiss={() => handleInputChange('phone', '')}
                        isValid={formState.phone.isValid}
                        messageValid={formState.phone.msgValid}
                    />
                    <TextInputW
                        placeholder='Password'
                        secureTextEntry={formState.password.showPassword}
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
                        onShowPass={handleShowPassword}
                        hidePassword={formState.password.showPassword}
                    />
                    <ButtonsW
                        disabled={isFormValid}
                        onPress={handleRegister}
                        title={'Create Account'}
                        style={styles.buttonLogin}
                    />
                    <View style={styles.viewTextHasAccount}>
                        <Text style={styles.hasAccountText}>
                            I Already Have an Account{' '}
                        </Text>
                        <TouchableOpacity onPress={handleHasLogin}>
                            <Text style={styles.login}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableFeedbackView>
    )
}

export default RegisterScreen
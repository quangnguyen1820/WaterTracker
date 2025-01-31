import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '@styles/ForgotPasswordStyles'
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

interface ForgotPasswordProps {
    navigation: NavigationProp<ContantsNavigator>
}

const ForgotPasswordScreen = (props: ForgotPasswordProps) => {

    const { navigation } = props

    const [isHideFooter, setHideFooter] = useState(false)
    const [formState, setFormState] = useState<{
        phone: BaseInputState
    }>(
        {
            phone: { value: '', isValid: false, msgValid: '' },
        }
    )

    const handleOnBack = () => {
        navigation.goBack()
    }

    type ValidationRules = {
        [key in keyof typeof formState]: ValidationRule;
    };

    const validationReles: ValidationRules = {
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

    const handleInputChange = (text: string) => {
        {
            const { isValid, msgValid } = validateField('phone', text);
            setFormState((prevState) => ({
                ...prevState,
                ['phone']: {
                    ...prevState['phone'],
                    value: text,
                    isValid,
                    msgValid
                }
            }))
        }
    }

    const handleVertifyPhone = () => {
        navigation.navigate(ContantsNavigator.RESET_PASSWORD_SCREEN)
    }

    const handleHideFooter = (isHide: boolean) => {
        setHideFooter(isHide)
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
                        placeholder='Phone'
                        onChangeText={(text: string) => handleInputChange(text)}
                        value={formState.phone.value}
                        leftIcon={{
                            name: 'phone',
                            color: colorIcon,
                            size: getSize(24)
                        }}
                        onDismiss={() => handleInputChange('')}
                        onFocus={() => handleHideFooter(true)}
                        onBlur={() => handleHideFooter(false)}
                        isValid={formState.phone.isValid}
                        messageValid={formState.phone.msgValid}
                    />

                    {
                        !isHideFooter &&
                        (<View style={styles.viewButton}>
                            <ButtonsW
                                disabled={isFormValid}
                                onPress={handleVertifyPhone}
                                title={'Confirm'}
                            />
                        </View>)
                    }

                </View>


            </SafeAreaView>
        </TouchableFeedbackView>
    )
}

export default ForgotPasswordScreen
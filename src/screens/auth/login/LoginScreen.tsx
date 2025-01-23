import svgApp from '@svg/svgApp';
import { ColorIcon } from '@themes/colors';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import ButtonsW from '@components/Buttons/ButtonsW';
import TextInputW from '@components/Inputs/TextInputW';
import { BaseInputState, PasswordState } from 'src/types/stateTypes';
import { isValidEmail } from '@utils/validation';
import { VALIDATION_MESSAGES } from '@constants/validationMessage';
import styles from '@styles/LoginStyles';
import { LoginScreenProps, SocialButtonProps } from './types';
import { ContantsNavigator } from '@navigation/ContantsNavigator';
import { updateConfig } from '@redux/slices/configSlice';
import { useDispatch } from 'react-redux';
import TouchableFeedbackView from '@components/views/TouchableFeedbackView';
import { getSize } from '@styles/sizes';

const LoginScreen = (props: LoginScreenProps) => {

    const { navigation } = props;
    const dispatch = useDispatch();

    const [password, setPassword] = useState<PasswordState>({
        value: '',
        isValid: false,
        msgValid: '',
        showPassword: false
    })
    const [email, setEmail] = useState<BaseInputState>({
        value: '',
        isValid: false,
        msgValid: '',
    })
    const [remember, setRemember] = useState<boolean>(false)

    useEffect(() => {
        console.log('===== LOGIN_SCREEN =====');

    }, [])

    const validateField = (field: string, value: string): { isValid: boolean; msgValid: string } => {
        let msgValid = '';
        let isValid = true;

        switch (field) {
            case 'email':
                if (value === '') {
                    msgValid = VALIDATION_MESSAGES.email.invalid;
                } else if (!isValidEmail(value)) {
                    msgValid = VALIDATION_MESSAGES.email.required;
                } else {
                    isValid = false;
                }
                break;

            case 'password':
                if (value === '') {
                    msgValid = VALIDATION_MESSAGES.password.required;
                } else if (value.length < 6) {
                    msgValid = VALIDATION_MESSAGES.password.tooShort;
                } else {
                    isValid = false;
                }
                break;

            default:
                break;
        }

        return { isValid, msgValid };
    }

    const handleLLoginWithGoogle = () => {

    }

    const handleLLoginWithFacebook = () => {

    }

    const handleDismissText = (field: 'email' | 'password') => {
        if (field === 'email') {
            setEmail({
                value: '',
                isValid: true,
                msgValid: VALIDATION_MESSAGES.email.invalid
            })
        } else {
            setPassword({
                ...password,
                value: '',
                isValid: true,
                msgValid: VALIDATION_MESSAGES.password.required
            })
        }
    }

    const handleChangeText = (field: 'email' | 'password', value: string) => {
        const { isValid, msgValid } = validateField(field, value);

        if (field === 'email') {
            setEmail((prev) => ({ ...prev, value, isValid, msgValid }));
        } else if (field === 'password') {
            setPassword((prev) => ({ ...prev, value, isValid, msgValid }));
        }
    };

    const handleRemember = () => {
        setRemember(!remember)
    }

    const handleShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword
        })
    }

    const handleLogin = () => {
        const dataValid = [
            {
                field: 'email',
                value: email.value,
                setState: setEmail
            },
            {
                field: 'password',
                value: password.value,
                setState: setPassword
            }
        ]

        let hasInvalidField = false;


        for (const item of dataValid) {
            const { isValid, msgValid } = validateField(item.field, item.value);

            item.setState((prev: any) => ({
                ...prev,
                value: item.value,
                isValid,
                msgValid
            }))

            if (isValid) {
                hasInvalidField = true;
            }
        }

        if (hasInvalidField) return

        dispatch(updateConfig({ isLoggedIn: true }))
    }

    const handleForgotPassword = () => {
        navigation.navigate(ContantsNavigator.FORGOT_PASSWORD_SCREEN)
    }

    const handleSignUp = () => {
        navigation.navigate(ContantsNavigator.REGISTER_SCREEN)
    }

    const handleTerms = () => {

    }

    const handlePolicy = () => {

    }

    const SocialButton: React.FC<SocialButtonProps> = ({ onPress, icon, text, style }) => {
        return (
            <TouchableOpacity style={[styles.buttonSocial, style]} onPress={onPress}>
                <Image source={icon} style={styles.socialIcon} />
                <Text style={styles.socialText}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <TouchableFeedbackView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.textNameScreen}>
                        Login
                    </Text>
                    <Text style={styles.textDescribe}>
                        Securely login to your account
                    </Text>
                    <TextInputW
                        placeholder='Email'
                        onChangeText={(value: string) => handleChangeText('email', value)}
                        value={email.value}
                        style={styles.viewInput}
                        leftIcon={{
                            name: 'email',
                            color: ColorIcon.icon,
                            size: getSize(24)
                        }}
                        onDismiss={() => handleDismissText('email')}
                        isValid={email.isValid}
                        messageValid={email.msgValid}
                    />
                    <TextInputW
                        placeholder='Password'
                        secureTextEntry={true}
                        leftIcon={{
                            name: 'password',
                            color: ColorIcon.icon,
                            size: getSize(24)
                        }}
                        onChangeText={(value: string) => handleChangeText('password', value)}
                        value={password.value}
                        style={styles.viewInput}
                        onDismiss={() => handleDismissText('password')}
                        isValid={password.isValid}
                        messageValid={password.msgValid}
                        onShowPass={handleShowPassword}
                        hidePassword={password.showPassword}
                    />
                    <View style={styles.viewRadioCheck}>
                        <TouchableOpacity
                            onPress={handleRemember}
                        >
                            <SvgXml
                                xml={svgApp({ name: remember ? 'radio-checked' : 'radio-unChecked', size: getSize(20) })}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleRemember}
                        >
                            <Text style={styles.textRemember}>Remember me</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonsW
                        onPress={handleLogin}
                        title={'Log In'}
                        style={styles.buttonLogin}
                    />
                    <TouchableOpacity
                        onPress={handleForgotPassword}
                    >
                        <Text style={styles.forgotText}>Forgot Password</Text>
                    </TouchableOpacity>
                    <Text style={styles.orText}>- OR Continue with -</Text>
                    <View style={styles.socialContainer}>
                        <SocialButton
                            onPress={handleLLoginWithGoogle}
                            icon={require('@assets/images/google.png')}
                            text="Google"
                            style={styles.buttonSocialGoogle}
                        />
                        <SocialButton
                            onPress={handleLLoginWithFacebook}
                            icon={require('@assets/images/facebook.png')}
                            text="Facebook"
                        />
                    </View>
                    <View style={styles.viewTextCreate}>
                        <Text style={styles.createAccountText}>
                            Create An Account{' '}
                        </Text>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={styles.signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.termsText}>
                        By clicking Continue, you agree to our{' '}
                        <Text style={styles.termsLink} onPress={() => handleTerms()}>Terms of Service</Text> and{' '}
                        <Text style={styles.termsLink} onPress={() => handlePolicy()}>Privacy Policy</Text>
                    </Text>
                </View>
            </View>
        </TouchableFeedbackView>
    );
};

export default LoginScreen;
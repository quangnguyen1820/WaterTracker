import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TouchableFeedbackView from '@components/views/TouchableFeedbackView'
import styles from '@styles/VertificationCodeStyles'
import { SvgXml } from 'react-native-svg'
import { svgIcon } from '@assets/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getSize } from '@styles/sizes'
import GpayPinInput from '@components/Inputs/PinInput'
import ButtonsW from '@components/Buttons/ButtonsW'
import { ContantsNavigator } from '@navigation/ContantsNavigator'
import { NavigationProp } from '@react-navigation/native'

interface VertificationCodeProps {
    navigation: NavigationProp<ContantsNavigator>
}

const VertificationCodeScreen = (props: VertificationCodeProps) => {

    const { navigation } = props;

    const [isDisable, setDisable] = useState(true)

    const handlePinCode = (value: string) => {
        const isValid = value.length < 6
        setDisable(isValid)
    }

    const handleOnBack = () => {
        navigation.goBack()
    }

    const handleGoToSuccess = () => {
        navigation.navigate(ContantsNavigator.VERIFIRED_SUCCESS_SCREEN)
    }

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
                            Verification Code
                        </Text>
                        <Text style={styles.textDescribe}>
                            We sent you a 4 digit code to your email address. please check & enter your code
                        </Text>
                    </View>
                    <GpayPinInput
                        style={{ marginTop: 45 }}
                        onChangeValue={handlePinCode}
                    />
                    <ButtonsW
                        onPress={handleGoToSuccess}
                        title={'Vertify'}
                        style={{ marginTop: 52 }}
                        disabled={isDisable}
                    />

                </View>
                <View style={styles.viewTextResend}>
                    <Text style={styles.textRequsetResend}>Didn’t Receive the Code?{' '}</Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.textResend}

                        >Resend
                        </Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </TouchableFeedbackView>
    )
}

export default VertificationCodeScreen
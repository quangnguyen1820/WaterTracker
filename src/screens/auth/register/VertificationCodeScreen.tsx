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
import ViewOTP from '@components/views/ViewOTP'

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

    const handleResend = () => {

    }

    return (
        <TouchableFeedbackView>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentHeader}>
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
                </View>
                <ViewOTP
                    onChangeValue={handlePinCode}
                    onPress={handleGoToSuccess}
                    disable={isDisable}
                    onResend={handleResend}
                />
            </SafeAreaView>
        </TouchableFeedbackView>
    )
}

export default VertificationCodeScreen
import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '@styles/VertìiredSuccessStyles'
import { height, width } from '@utils/constants'
import ButtonsW from '@components/Buttons/ButtonsW'
import { NavigationProp } from '@react-navigation/native'
import { ContantsNavigator } from '@navigation/ContantsNavigator'

interface VeritifiredSuccessProps {
    navigation: NavigationProp<ContantsNavigator>
}

const VeritifiredSuccessScreen = (props: VeritifiredSuccessProps) => {

    const { navigation } = props

    const handleOnPress = () => {
        navigation.navigate(ContantsNavigator.LOGIN_SCREEN)
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('@assets/images/completed.png')}
                style={styles.image}
            />
            <Text style={styles.titleBold}>
                You are Verified
            </Text>
            <Text style={styles.subTitleBold}>
                {
                    `Congratulations to you. You are now Verified!\nKindly proceed to log in`
                }
            </Text>
            <View style={styles.viewButton}>
                <ButtonsW
                    onPress={handleOnPress}
                    title={'Continue'}
                />
            </View>
        </View>
    )
}

export default VeritifiredSuccessScreen
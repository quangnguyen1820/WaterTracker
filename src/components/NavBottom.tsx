import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { width } from '@utils/constants'
import { ColorsScreen, ColorsText } from '@themes/colors'
import { ContantsNavigator } from '@navigation/ContantsNavigator'
import { SvgXml } from 'react-native-svg'
import { svgIcon } from '@assets/svg'
import { typography } from '@styles/typography'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

interface NavBottomProps {
    routeId: number
}

export default function NavBottom(props: NavBottomProps) {

    const { routeId } = props

    const navigation = useNavigation<any>();

    const [selected, setSelected] = useState(1)

    type buttonType = {
        id: number;
        name: string;
        icon: string;
        route: string;
    }

    const buttons: buttonType[] = [
        {
            id: 1,
            name: 'Home',
            icon: 'home',
            route: ContantsNavigator.HOME_SCREEN
        },
        {
            id: 2,
            name: 'Analytics',
            icon: 'analytics',
            route: ContantsNavigator.ANALYSIS_SCREEN
        },
        {
            id: 3,
            name: '',
            icon: '',
            route: ''
        },
        {
            id: 4,
            name: 'Setting',
            icon: 'settings',
            route: ContantsNavigator.HOME_SCREEN
        },
        {
            id: 5,
            name: 'Profile',
            icon: 'user',
            route: ContantsNavigator.HOME_SCREEN
        },
    ]

    useFocusEffect(
        useCallback(() => {
            const itemFind = buttons.find(item => item.id === routeId)

            if (itemFind) {
                setSelected(itemFind.id)
            }
        }, [routeId])
    )


    const handleSelectRoute = (button: buttonType) => {
        setSelected(button.id)
        if (button.route) {
            navigation.navigate(button.route)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {
                    buttons.map((button) => (
                        <TouchableOpacity
                            key={button.id}
                            style={styles.button}
                            onPress={() => handleSelectRoute(button)}
                        >
                            {
                                button.icon &&
                                <SvgXml xml={
                                    svgIcon({
                                        name: button.icon,
                                        size: 22,
                                        color: button.id === selected ? ColorsScreen.background : ColorsText.black
                                    })
                                } />
                            }
                            <Text style={[styles.textName, {
                                color: button.id === selected ?
                                    ColorsScreen.background : ColorsText.black
                            }]}>{button.name}</Text>
                        </TouchableOpacity>
                    )
                    )
                }
                <TouchableOpacity
                    style={styles.buttonCenter}
                    onPress={() => handleSelectRoute(buttons[2])}
                >
                    <SvgXml xml={svgIcon({ name: 'clock', size: 22, color: selected === 3 ? ColorsScreen.background : ColorsText.black })} />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.viewSafeArea} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        position: 'absolute',
        bottom: 0,
        shadowColor: ColorsText.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.01)',
        elevation: 5
    },
    content: {
        flex: 1,
        backgroundColor: ColorsText.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        paddingTop: 16
    },
    viewSafeArea: {
        backgroundColor: ColorsText.white
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textName: {
        ...typography.textTimeRegular,
        marginTop: 6
    },
    buttonCenter: {
        padding: 18,
        borderRadius: 60,
        backgroundColor: ColorsText.white,
        position: 'absolute',
        top: -10,
        shadowColor: ColorsText.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.01)',
        elevation: 5,
        left: '50%'
    }
})
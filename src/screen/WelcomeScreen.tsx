import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import ScrollToReanimated from '../components/ContinuousScrollBanner'
import { height, paddingHasNotch, width } from '../utils/constants'
import { ColorsScreen, ColorsText } from '../themes/colors'
import { typography } from '../styles/typography'
import ButtonsW from '../components/Buttons/ButtonsW'
import { NavigationProp } from '@react-navigation/native'
import { ContantsNavigator } from '../navigation/ContantsNavigator'

type DataCarousel = {
    id: string,
    label: string,
    content: string,
    image: ReturnType<typeof require>
}

const dataCarousel: DataCarousel[] = [
    {
        id: '1',
        label: 'Track your daily water intake with Us.',
        content: 'Achieve your hydration goals with a simple tap!',
        image: require('../assets/images/onBoardFirst.png')
    },
    {
        id: '2',
        label: 'Smart Reminders Tailored to You',
        content: 'Quick and easy to set your hydration goal & then track your daily water intake progress.',
        image: require('../assets/images/onBoardSecond.png')
    },
    {
        id: '3',
        label: 'Easy to Use – Drink, Tap, Repeat',
        content: 'Staying hydrated every day is easy with Drops Water Tracker.',
        image: require('../assets/images/onBoardThird.png')
    }
]
const renderItem = () => {
    return (
        dataCarousel?.map((item: DataCarousel, index: number) => (
            <View
                key={index}
                style={styles.contentView}>
                <Image
                    source={item?.image}
                    style={styles.image}
                />
                <Text
                    style={styles.textLabel}>
                    {item.label}
                </Text>
                <Text
                    style={styles.textContent}>
                    {item.content}
                </Text>
            </View>
        ))
    )
}

interface WelcomeScreenProps {
    navigation: NavigationProp<ContantsNavigator>
}

const WelcomeScreen = (props: WelcomeScreenProps) => {

    const { navigation } = props;

    const [activeIndex, setActiveIndex] = useState({ current: 0, previous: null })

    const [onNext, setOnNext] = useState(0)

    const swiperPagination = () => (
        dataCarousel.map((item: DataCarousel, index: number) => (
            <View
                key={index}
                style={[styles.viewItemSwiper, {
                    marginRight: index === dataCarousel?.length - 1 ? 0 : 8,
                    backgroundColor: activeIndex.current === index ? ColorsScreen.background
                        : ColorsScreen.grayLight

                }]}
            />
        ))
    )

    const buttonNext = () => {
        if (onNext > 1) {
            navigation.navigate(ContantsNavigator.LOGIN_SCREEN)
            return
        }
        let valueNext = onNext + 1
        setActiveIndex({
            ...activeIndex,
            current: onNext + 1
        })
        setOnNext(valueNext)
    }

    return (
        <View style={styles.containerView}>
            <ScrollToReanimated
                data={dataCarousel}
                renderItem={renderItem}
                nextValue={onNext}
            />
            <View style={styles.viewSwiper}>
                {swiperPagination()}
            </View>
            <View style={styles.viewButton}>
                <ButtonsW
                    onPress={buttonNext}
                    title={onNext < 2 ? 'NEXT' : 'GET STARTED'}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    containerView: {
        width: width,
        height: height,
        backgroundColor: ColorsText.white
    },
    contentView: {
        width: width,
        height: height * 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginTop: height * 0.1
    },
    textLabel: {
        ...typography.titleBoldH2,
        maxWidth: width * 0.7,
        textAlign: 'center',
        marginTop: 16
    },
    textContent: {
        ...typography.textRegular,
        maxWidth: width * 0.7,
        textAlign: 'center',
        marginTop: 22
    },
    viewSwiper: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    viewButton: {
        paddingHorizontal: 16,
        position: 'absolute',
        bottom: paddingHasNotch * 2,
        width: width
    },
    viewItemSwiper: {
        width: 20,
        height: 6,
        borderRadius: 20,
    }
});



export default WelcomeScreen
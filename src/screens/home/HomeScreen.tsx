import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '@styles/HomeStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { svgIcon } from '@assets/svg';
import svgView from '@assets/svg/svgView';
import { width } from '@utils/constants';
import { ColorView } from '@themes/colors';
import { User } from '@types/userTypes'
import svgChart from '@assets/svg/svgChart';
import ButtonsW from '@components/Buttons/ButtonsW';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const [greeting, setGeeting] = useState('')
    const [userInfo, setUserInfo] = useState<User>({
        name: 'Quang',
        id: 1,
        email: '',
        phone: ''
    })

    useEffect(() => {
        // dispatch(updateConfig({ isLoggedIn: false }))
    }, [])

    useEffect(() => {
        updateGreeting()

        const interval = setInterval(updateGreeting, 60000);
        return () => clearInterval(interval);
    }, [])

    const updateGreeting = () => {
        const currentHouse = new Date().getHours();
        if (currentHouse >= 6 && currentHouse < 13) {
            setGeeting('Good morning')
        } else if (currentHouse >= 13 && currentHouse < 18) {
            setGeeting('Good afternoon')
        } else {
            setGeeting('Good evening')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.viewHeader}>
                        <View style={{}}>
                            <Text style={styles.textWelcome}>{greeting}</Text>
                            <Text style={styles.textName}>{userInfo.name}</Text>
                        </View>
                        <View>
                            <SvgXml xml={svgIcon({ name: 'notification-unread', size: 40 })} />
                        </View>
                    </View>

                    <View style={styles.viewCardGoal}>
                        <SvgXml xml={svgView({ name: 'card-goal', size: width * 0.92558, sizeSecod: width * 0.92558 * 0.5015673981 })} />
                        <View style={styles.viewTextCard}>
                            <View style={styles.viewCardText}>
                                <Text style={styles.textTimeCard}>11:00 AM</Text>
                                <Text style={styles.textInfoCard}>200ml water(2 Glass)</Text>
                            </View>
                            <View style={styles.viewButtonCard}>
                                <TouchableOpacity style={styles.buttonAddCard}>
                                    <Text>Add Your Goal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewChart}>
                        <View style={styles.viewRoundChart}>
                            <SvgXml xml={
                                svgChart({ name: 'chart-round', size: width * 0.4884 })}
                            />

                            <Text style={styles.valueRoundChart}>500ml</Text>
                        </View>

                        <View style={styles.viewRightChart}>
                            <View style={styles.viewStatistic}>
                                <View style={styles.headerStatictis}>
                                    <Text style={styles.timeRightChart}>
                                        9:30 AM
                                    </Text>
                                    <View style={{ width: '24%', height: 4, borderRadius: 60, backgroundColor: ColorView.buttonSocial, }} />
                                </View>
                                <View style={styles.viewFooterStatictis}>
                                    <View style={styles.viewDoneTarget}>
                                        <SvgXml xml={
                                            svgIcon({
                                                name: 'coffee', size: 20
                                            })
                                        } />
                                        <Text style={styles.valueTarget}>100ml</Text>
                                    </View>
                                    <Text style={styles.valuePercent}>10%</Text>
                                </View>
                            </View>

                            <View style={styles.viewTarget}>
                                <Text style={styles.titleTarget}>
                                    Target
                                </Text>
                                <Text style={styles.valueTargetBottom}>
                                    2000ml
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewButton}>
                        <ButtonsW
                            title='Go To Dashboard'
                            onPress={() => { }}
                            style={styles.button}
                        />
                    </View>
                    <View style={styles.viewContentGoal}>
                        <Text style={styles.textContentGoal}>
                            You got 50% of today’s goal, keep focus on your health!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
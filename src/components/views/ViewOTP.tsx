import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ButtonsW from '@components/Buttons/ButtonsW';
import { getSize } from '@styles/sizes';
import { typography } from '@styles/typography';
import { ColorsText } from '@themes/colors';
import { width } from '@utils/constants';
import GpayPinInput from '@components/Inputs/PinInput'
import { formatTime } from '@utils/timeUtils';

interface ViewOTPProps {
    onChangeValue: (value: string) => void
    onPress: () => void
    onResend: () => void
    disable: boolean
    title?: string
    subTitle?: string
}

const COUNT = 180
const COUNT_RESEND = 60

const ViewOTP = (props: ViewOTPProps) => {

    const { onChangeValue, onPress, disable, title, subTitle, onResend } = props;
    const [timeCount, setTimeCount] = useState(COUNT);
    const [timeCountResend, setTimeCountResend] = useState(COUNT_RESEND)
    const timeInterval = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        startCountdown()

        return () => {
            if (timeInterval.current) {
                clearInterval(timeInterval.current);
            }
        };
    }, [])

    const startCountdown = () => {
        if (timeInterval.current) {
            clearInterval(timeInterval.current);
        }

        setTimeCount(COUNT);
        setTimeCountResend(COUNT_RESEND)
        timeInterval.current = setInterval(() => {
            setTimeCount((prev) => {
                if (prev <= 1) {
                    if (timeInterval.current) {
                        clearInterval(timeInterval.current);
                    }
                    return 0;
                }
                return prev - 1;
            });
            setTimeCountResend((prev) => {
                return prev - 1;
            })
        }, 1000);
    };

    const handleResend = () => {
        startCountdown()
        onResend()
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.content}>
                <View style={styles.contentTitle}>
                    <Text style={styles.textNameScreen}>
                        {title || 'Verification Code'}
                    </Text>
                    <Text style={styles.textDescribe}>
                        {subTitle || 'We sent you a 4 digit code to your email address. please check & enter your code'}
                    </Text>
                </View>
                <GpayPinInput
                    style={{ marginTop: 45 }}
                    onChangeValue={onChangeValue}
                />
                <ButtonsW
                    onPress={onPress}
                    title={'Vertify'}
                    style={{ marginTop: 52 }}
                    disabled={disable}
                />
                {
                    timeCount !== 0 &&
                    <Text style={styles.textCountTime}>{formatTime(timeCount)}</Text>
                }

            </View>
            {
                timeCountResend <= 1 ?
                    <View style={styles.viewTextResend}>
                        <Text style={styles.textRequsetResend}>Didn’t Receive the Code?{' '}</Text>
                        <TouchableOpacity
                            onPress={handleResend}
                        >
                            <Text
                                style={styles.textResend}
                            >Resend
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.viewTextResend}>
                        <Text style={styles.textContentTime}>Resend after <Text style={styles.textCountTime}>{formatTime(timeCountResend)}</Text></Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 16,
    },
    contentTitle: {
        marginTop: getSize(52)
    },
    textNameScreen: {
        ...typography.titleBoldH2,
        marginBottom: 6
    },
    textDescribe: {
        ...typography.textRegular,
        color: ColorsText.grayDescibe,
        width: width > 400 ? '96%' : '84%'
    },
    viewTextResend: {
        position: 'absolute',
        bottom: getSize(16),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textRequsetResend: {
        ...typography.textRegular,
        color: ColorsText.grayHolder,
        alignSelf: 'center',
    },
    textResend: {
        ...typography.textRegularBold,
        color: ColorsText.blue,
        textDecorationLine: 'underline',
    },
    textContentTime: {
        ...typography.textRegular,
        textAlign: 'center',
    },
    textCountTime: {
        ...typography.textRegular,
        color: ColorsText.valid,
        textAlign: 'center',
        marginTop: 32
    }
});

export default ViewOTP
import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const LoginScreen = () => {

    const config = useSelector((state: RootState) => state.config);

    return (
        <View>
            <Text>LoginScreen</Text>
        </View>
    )
}

export default LoginScreen
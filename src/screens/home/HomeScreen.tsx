import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updateConfig } from '@redux/slices/configSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateConfig({ isLoggedIn: false }))
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <Text style={{}}>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen
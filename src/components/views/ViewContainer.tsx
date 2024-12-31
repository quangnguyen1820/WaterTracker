import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { height, width } from '../../utils/constants';
import { ColorsText } from '../../themes/colors';

interface ViewContainerProps {
    children: ReactNode
}

const ViewContainer = (props: ViewContainerProps) => {

    const { children } = props

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: ColorsText.white
    }
});

export default ViewContainer
import React, { useEffect } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import {
    AnimatedRef,
    scrollTo,
    useAnimatedRef,
    useDerivedValue,
    useSharedValue
} from 'react-native-reanimated';
import { height } from '../utils/constants';
const { width } = Dimensions.get('screen');

type dataType = {
    id: string,
    label?: string,
    imagePath?: string,
    color?: string
}

interface ScrollToReanimatedProps {
    data: dataType[]
    renderItem: () => React.ReactNode;
    nextValue: number
}

export default function ScrollToReanimated(props: ScrollToReanimatedProps) {

    const { data, renderItem, nextValue } = props;

    const scrollRef: AnimatedRef<any> = useAnimatedRef();
    const scroll = useSharedValue(0);
    useDerivedValue(() => {
        scrollTo(scrollRef, scroll.value * width, 0, true);
    });

    useEffect(() => {
        onPress(nextValue > 0 ? true : false)
    }, [nextValue])

    const onPress = (next: boolean) => {
        if (next) {
            scroll.value =
                scroll.value === data.length - 1 ? data.length - 1 : scroll.value + 1;
        } else {
            scroll.value = scroll.value === 0 ? 0 : scroll.value - 1;
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    item: {
        height: height,
        width: width,
        backgroundColor: 'blue',
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: '#fff',
        fontSize: 20,
    },
});
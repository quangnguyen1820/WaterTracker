import { height } from "@utils/constants"
import { Platform } from "react-native"

const calculateSize = (baseSize: number, multiplier: number) => {
    return Platform.OS === 'android' ? baseSize : height * multiplier
}


const sizes = {
    12: calculateSize(12, 0.01288),
    14: calculateSize(14, 0.01502),
    16: calculateSize(16, 0.01717),
    18: calculateSize(18, 0.01931),
    20: calculateSize(20, 0.02146),
    22: calculateSize(22, 0.0236),
    24: calculateSize(24, 0.0258),
    26: calculateSize(26, 0.0279),
    34: calculateSize(34, 0.0365),
    40: calculateSize(40, 0.0429),
    46: calculateSize(46, 0.0494),
    48: calculateSize(48, 0.0515),
    60: calculateSize(60, 0.0644),
};

export const getSize = (key: keyof typeof sizes): number => {
    return sizes[key] !== undefined ? sizes[key] : key;
}
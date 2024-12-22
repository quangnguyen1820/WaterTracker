import { Platform, StyleSheet } from "react-native";
import { ColorsText } from "../themes/colors";

export const typography = StyleSheet.create({
    titleBoldH1: {
        fontFamily: 'Prompt-Bold',
        fontSize: Platform.OS === 'android' ? 24 : 26,
        color: ColorsText.blackMedium
    },
    titleBoldH2: {
        fontFamily: 'Prompt-Bold',
        fontSize: Platform.OS === 'android' ? 22 : 24,
        color: ColorsText.blackMedium
    },
    titleBoldH3: {
        fontFamily: 'Prompt-Bold',
        fontSize: Platform.OS === 'android' ? 20 : 22,
        color: ColorsText.blackMedium
    },
    titleBoldH4: {
        fontFamily: 'Prompt-Bold',
        fontSize: Platform.OS === 'android' ? 18 : 20,
        color: ColorsText.blackMedium
    },
    textRegular: {
        fontFamily: 'Prompt-Regular',
        fontSize: Platform.OS === 'android' ? 14 : 14,
        color: ColorsText.black
    }
})
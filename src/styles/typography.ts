import { Platform, StyleSheet } from "react-native";
import { ColorsText } from "../themes/colors";
import { getSize } from "./sizes";

const getFontSize = (androidSize: number, ratio: 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26) =>
    Platform.OS === 'android' ? androidSize : getSize(ratio);

export const typography = StyleSheet.create({
    titleBoldH1: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(24, 26),
        color: ColorsText.blackMedium
    },
    titleBoldH2: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(22, 24),
        color: ColorsText.blackMedium
    },
    titleBoldH3: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(20, 22),
        color: ColorsText.blackMedium
    },
    titleBoldH4: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(18, 20),
        color: ColorsText.blackMedium
    },
    titleBoldH5: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(16, 18),
        color: ColorsText.blackMedium
    },
    titleRegularH4: {
        fontFamily: 'Prompt-Regular',
        fontSize: getFontSize(16, 18),
        color: ColorsText.blackMedium
    },
    titleRegularH5: {
        fontFamily: 'Prompt-Regular',
        fontSize: getFontSize(14, 16),
        color: ColorsText.blackMedium
    },
    textRegular: {
        fontFamily: 'Prompt-Regular',
        fontSize: getFontSize(14, 14),
        color: ColorsText.black
    },
    textRegularMedium: {
        fontFamily: 'Prompt-Medium',
        fontSize: getFontSize(14, 14),
        color: ColorsText.black
    },
    textRegularBold: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(14, 14),
        color: ColorsText.black
    },
    textMsgRegular: {
        fontFamily: 'Prompt-Regular',
        fontSize: getFontSize(12, 12),
        color: ColorsText.black
    },
    textTimeRegular: {
        fontFamily: 'Prompt-Regular',
        fontSize: getFontSize(12, 12),
        color: ColorsText.black
    },
    textTimeMedium: {
        fontFamily: 'Prompt-Medium',
        fontSize: getFontSize(12, 12),
        color: ColorsText.black
    },
    textTimeRegularBold: {
        fontFamily: 'Prompt-Bold',
        fontSize: getFontSize(12, 12),
        color: ColorsText.black
    },
})
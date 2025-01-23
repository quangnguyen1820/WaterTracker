import { ColorsText } from "@themes/colors";
import { StyleSheet } from "react-native";
import { typography } from "./typography";
import { getSize } from "./sizes";
import { width } from "@utils/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsText.white,
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 16
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
        bottom: 42,
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
});

export default styles;
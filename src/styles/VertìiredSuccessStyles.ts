import { ColorsText } from "@themes/colors";
import { StyleSheet } from "react-native";
import { height, width } from "@utils/constants";
import { typography } from "./typography";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsText.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width * 0.6862,
        height: height * 0.205
    },
    titleBold: {
        ...typography.titleBoldH3,
        marginTop: 32
    },
    subTitleBold: {
        ...typography.textRegular,
        color: ColorsText.grayDescibe,
        textAlign: 'center',
        marginTop: 7
    },
    viewButton: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 32
    }

});

export default styles;
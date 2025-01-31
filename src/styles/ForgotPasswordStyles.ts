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
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16
    },
    contentTitle: {
        marginTop: getSize(52),
        marginBottom: getSize(48)
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
    viewButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center'
    }
});

export default styles;
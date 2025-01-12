import { StyleSheet } from 'react-native';
import { ColorsText } from '@themes/colors';
import { typography } from '@styles/typography';
import { height, width } from '@utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: ColorsText.white,
    },
    content: {
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: height * 0.21
    },
    hasAccountText: {
        ...typography.titleRegularH5,
        color: ColorsText.black,
        textAlign: 'center',
    },
    login: {
        ...typography.titleRegularH5,
        color: ColorsText.blue,
        fontWeight: '600'
    },
    buttonLogin: {
        marginBottom: 34
    },
    viewInput: {
        marginBottom: 20
    },
    textDescribe: {
        ...typography.textRegular,
        color: ColorsText.grayDescibe,
        marginBottom: 48
    },
    textNameScreen: {
        ...typography.titleBoldH2,
        marginBottom: 6
    },
    viewTextHasAccount: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: width > 400 ? height * 0.2039 : 94,
        justifyContent: 'center',
    }
});

export default styles;
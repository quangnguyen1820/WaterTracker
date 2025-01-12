import { StyleSheet } from 'react-native';
import { ColorsText, ColorView } from '@themes/colors';
import { typography } from '@styles/typography';
import { height, paddingHasNotch, width } from '@utils/constants';
import { getSize } from './sizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: ColorsText.white,
    },
    content: {
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: paddingHasNotch
    },
    termsText: {
        ...typography.textMsgRegular,
        width: width > 400 ? '88%' : '72%',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 6
    },
    termsLink: {
        ...typography.textMsgRegular,
        color: ColorsText.blue
    },
    createAccountText: {
        ...typography.titleRegularH5,
        color: ColorsText.black,
        textAlign: 'center',
    },
    signup: {
        ...typography.titleRegularH5,
        color: ColorsText.blue,
        fontWeight: '600'
    },
    socialContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: getSize(40)
    },
    socialIcon: {
        width: height * 0.03005,
        height: height * 0.03005
    },
    socialText: {
        ...typography.textRegular,
        color: ColorsText.grayHolder,
        marginLeft: getSize(12)
    },
    buttonSocialGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: height * 0.0129,
        paddingHorizontal: 18,
        borderRadius: 60,
        marginRight: getSize(16),
        borderColor: ColorView.buttonSocial
    },
    buttonSocial: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 60,
        borderColor: ColorView.buttonSocial
    },
    orText: {
        ...typography.textRegular,
        marginBottom: getSize(24),
        textAlign: 'center'
    },
    forgotText: {
        ...typography.textRegular,
        color: ColorsText.blue,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: getSize(46)
    },
    buttonLogin: {
        marginBottom: getSize(34)
    },
    viewRadioCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getSize(22),
        marginLeft: 24
    },
    textRemember: {
        ...typography.textMsgRegular,
        color: ColorsText.gray,
        marginLeft: 8
    },
    viewInput: {
        marginBottom: getSize(22)
    },
    textDescribe: {
        ...typography.textRegular,
        color: ColorsText.grayDescibe,
        marginBottom: getSize(48)
    },
    textNameScreen: {
        ...typography.titleBoldH2,
        marginBottom: 6
    },
    viewTextCreate: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 22,
        justifyContent: 'center'
    }
});

export default styles;
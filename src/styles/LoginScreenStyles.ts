import { StyleSheet } from 'react-native';
import { ColorsText, ColorView } from '@themes/colors';
import { typography } from '@styles/typography';
import { paddingHasNotch } from '@utils/constants';

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
        width: '88%',
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
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    socialIcon: {
        width: 28,
        height: 28
    },
    socialText: {
        ...typography.textRegular,
        color: ColorsText.grayHolder,
        marginLeft: 12
    },
    buttonSocialGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 60,
        marginRight: 16,
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
        marginBottom: 24,
        textAlign: 'center'
    },
    forgotText: {
        ...typography.textRegular,
        color: ColorsText.blue,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 46
    },
    buttonLogin: {
        marginBottom: 34
    },
    viewRadioCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 24
    },
    textRemember: {
        ...typography.textMsgRegular,
        color: ColorsText.gray,
        marginLeft: 8
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
    viewTextCreate: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 22,
        justifyContent: 'center'
    }
});

export default styles;
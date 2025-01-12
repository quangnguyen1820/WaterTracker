import { StyleSheet } from 'react-native';
import { ColorsScreen, ColorsText } from '@themes/colors';
import { typography } from '@styles/typography';
import { height, width } from '@utils/constants';

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorsScreen.background
    },
    backgroundImage: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0
    },
    viewContent: {
        width: '100%',
        alignItems: 'center',
        paddingTop: width > 400 ? height * 0.21 : height * 0.25
    },
    textHeader: {
        ...typography.titleBoldH1,
        color: ColorsText.white,
        letterSpacing: 0.7
    },
    textContent: {
        ...typography.textRegular,
        color: ColorsText.white,
        letterSpacing: 0.7,
        textAlign: 'center',
        marginTop: 8
    }
});

export default styles;
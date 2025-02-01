import { StyleSheet } from 'react-native';
import { ColorsScreen, ColorsText, ColorView } from '@themes/colors';
import { typography } from './typography';
import { getSize } from './sizes';
import { width } from '@utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: ColorsScreen.backgroundHome,
    },
    scrollViewContainer: {
        flex: 1
    },
    viewHeader: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1
    },
    textWelcome: {
        ...typography.textRegular,
        color: ColorsText.grayWelcome
    },
    textName: {
        ...typography.titleBoldH3,
        color: ColorsText.black
    },
    viewCardGoal: {
        width: '100%',
        alignItems: 'center',
        marginTop: getSize(12)
    },
    viewTextCard: {
        position: 'absolute',
        width: width * 0.92558,
        height: width * 0.92558 * 0.5015673981,
        top: 0,
        borderRadius: 16,
        paddingTop: 12,
        paddingLeft: 22,
        justifyContent: 'space-between'
    },
    viewCardText: {
        flex: 1,
    },
    textTimeCard: {
        ...typography.titleBoldH3
    },
    textInfoCard: {
        ...typography.textRegularMedium,
        color: ColorsText.grayWelcome
    },
    buttonAddCard: {
        paddingHorizontal: 26,
        paddingVertical: 8,
        borderRadius: 60,
        backgroundColor: ColorsText.white
    },
    viewButtonCard: {
        flexDirection: 'row',
        marginBottom: 29
    },
    textButtonCard: {
        ...typography.textRegularMedium,
        color: ColorsText.black
    },
    viewChart: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 30,
    },
    viewRoundChart: {
        width: width * 0.4884,
        marginTop: 24
    },
    valueRoundChart: {
        position: 'absolute',
        bottom: width * 0.1047,
        alignSelf: 'center',
        ...typography.titleBoldH4,
        color: ColorsText.white
    },
    viewRightChart: {
        width: '100%',
        alignItems: 'flex-end',
        position: 'absolute',
        top: 0, right: 0,
        marginRight: 16
    },
    viewStatistic: {
        width: 240,
        paddingTop: 22,
        paddingBottom: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        borderRadius: 16,
        backgroundColor: ColorsText.white,
        shadowColor: ColorsText.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.01)',
        elevation: 5
    },
    headerStatictis: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeRightChart: {
        ...typography.textRegularMedium,
        color: ColorsText.grayWelcome,
        position: 'absolute',
        left: 0,
    },
    viewFooterStatictis: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 22,
    },
    viewDoneTarget: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    valueTarget: {
        ...typography.titleRegularH5,
        fontWeight: '600',
        marginLeft: 12
    },
    valuePercent: {
        ...typography.titleRegularH5,
        color: ColorsText.grayWelcome
    },
    viewTarget: {
        width: 150,
        justifyContent: 'space-between',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: ColorsText.white,
        marginTop: 20,
        shadowColor: ColorsText.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.01)',
        elevation: 5
    },
    valueTargetBottom: {
        ...typography.titleRegularH5,
        fontWeight: '600',
        marginTop: 14
    },
    titleTarget: {
        ...typography.textRegularMedium,
        color: ColorsText.grayWelcome,
    },
    viewButton: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 46,
        alignItems: 'center'
    },
    button: {
        width: '60%',
        shadowColor: ColorsText.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.01)',
        elevation: 5
    },
    viewContentGoal: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 22
    },
    textContentGoal: {
        ...typography.textRegular,
        color: ColorsText.grayWelcome,
        textAlign: 'center'
    }
});

export default styles;
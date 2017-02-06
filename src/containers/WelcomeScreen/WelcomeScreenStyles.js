import { Fonts,Colors } from '../../theme';

export default styles = {
    welcomeContainer: {
        flex: 1,
    },
    logoContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    welcomeTextContainer: {
       flex: 1,
       marginTop: 15
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: Fonts.size.h4,
        fontFamily: Fonts.type.regular
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Colors.primaryColor,
        padding: 15,
        borderRadius: 2,
        marginHorizontal: 10,
        marginBottom: 90
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginLeft: 10,
        color: Colors.whiteColor,
        fontFamily: Fonts.type.regular
    }
}


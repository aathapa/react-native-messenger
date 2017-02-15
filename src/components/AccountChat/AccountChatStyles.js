import { Colors,Fonts } from '../../theme/';
const styles = {
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    imageContainer: {
        flex:1.3
    },
    nameContainer: {
        flex: 7,
        flexDirection: 'column'
    },
    nameText: {   
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium
    },
    messageText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.mediumSmall,
        color: Colors.secondaryBlackColor
    },
    time: {
        flex: 2,
        alignItems: 'flex-end',
    },
    timeText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.mediumSmall
    },
    call: {
        flex: 2,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default styles;
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
        flex: 5,
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
        alignItems: 'flex-end'
    },
    timeText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.mediumSmall
    }
}

export default styles;
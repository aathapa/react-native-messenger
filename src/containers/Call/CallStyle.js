import { Colors,Fonts } from '../../theme/';

export default styles = {
    callContainer: {
        flex: 1,
        backgroundColor: Colors.secondaryWhiteColor,
    },
    groupCall: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 5
    },
    groupIcon: {
        flex:1.3
    },
    groupText: {
        flex:10,
        
    },
    callText: {
        fontFamily: Fonts.type.regular
    },
    suggestContainer: {
        padding: 10
    },
    suggestText: {
        color: Colors.secondaryBlackColor,
        fontSize: Fonts.size.small,
        fontWeight: "700"
    }
}
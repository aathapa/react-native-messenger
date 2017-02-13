import { Colors,Metrics } from '../../theme/';

export default styles = {
    navContainer: {
        height: Metrics.Metrics.NAVBAR_HEIGHT,
        backgroundColor: Colors.secondaryColor,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
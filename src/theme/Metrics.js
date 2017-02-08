
import { Platform } from 'react-native';
const Metrics = {
    ...Platform.select({
        ios: {
            STATUSBAR_HEIGHT: 20,
            NAVBAR_HEIGHT: 44
        },
        android: {
            STATUSBAR_HEIGHT: 0,
            NAVBAR_HEIGHT: 56
        }
    })
}

export default { Metrics };
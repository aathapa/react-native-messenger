import React, { Component } from 'react';
import { Text,View,StatusBar,Platform } from 'react-native';
import { Colors } from '../../theme/';

export default class MyStatusBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
             <View style={styles.statusBar}>
                 <StatusBar backgroundColor="#0084ff" barStyle='light-content' />
            </View>
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : 0;

const styles = {
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: Colors.primaryColor
    }
}

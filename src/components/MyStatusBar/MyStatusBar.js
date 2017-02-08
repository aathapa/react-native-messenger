import React, { Component } from 'react';
import { Text,View,StatusBar,Platform } from 'react-native';
import { Colors,Metrics } from '../../theme/';

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

const styles = {
    statusBar: {
        height: Metrics.Metrics.STATUSBAR_HEIGHT,
        backgroundColor: Colors.primaryColor
    }
}

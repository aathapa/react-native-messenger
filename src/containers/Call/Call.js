import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './CallStyle';
import { MyStatusBar } from '../../components/';


export default class Call extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.callContainer}>
                <MyStatusBar />
            </View>
        );
    }
}
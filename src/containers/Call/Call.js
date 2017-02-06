import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './CallStyle';


export default class Call extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.callContainer}>
                <Text>Call</Text>
            </View>
        );
    }
}
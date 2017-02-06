import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './GroupStyle';

export default class Group extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.groupContainer}>
                <Text>Group</Text>
            </View>
        );
    }
}
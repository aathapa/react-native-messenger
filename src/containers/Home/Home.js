import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './HomeStyle';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.homeContainer}>
                <Text>Home</Text>
            </View>
        );
    }
}
import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './GroupStyle';
import { MyStatusBar } from '../../components/';

export default class Group extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.groupContainer}>
                <MyStatusBar />
            </View>
        );
    }
}
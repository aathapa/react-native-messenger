import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './MenuStyle';
import { MyStatusBar } from '../../components/';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.menuContainer}>
                <MyStatusBar />
            </View>
        );
    }
}
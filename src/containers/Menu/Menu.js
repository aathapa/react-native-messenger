import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './MenuStyle';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.menuContainer}>
                <Text>Menu</Text>
            </View>
        );
    }
}
import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './HomeStyle';
import { MyStatusBar,NavBar } from '../../components/';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.homeContainer}>
                <MyStatusBar />
                <NavBar />
            </View>
        );
    }
}
import React, { Component } from 'react';
import { Text,View,TextInput } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './NavBarStyle';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.navContainer}>
                <View style={styles.icon}>
                    <IonIcons name="md-search" size={20} color="#fff" />
                </View>
                <View style={styles.textInput}>
                    <TextInput 
                        
                    />
                </View>
            </View>
        );
    }
}
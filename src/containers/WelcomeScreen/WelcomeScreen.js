import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './WelcomeScreenStyles';
import { Images,Fonts } from '../../theme/';

export default class WelcomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.welcomeContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={Images.messengerLogo}
                        style={{width: 60,height:60}}
                    />
                </View>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>Welcome to {"\n"}Messenger</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.button} onPress={Actions.tabbar}>
                        <View style={styles.buttonView}>
                            <FontAwesome name="facebook-official" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Login with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}
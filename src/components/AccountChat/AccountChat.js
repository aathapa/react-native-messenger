import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity } from 'react-native';
import styles from './AccountChatStyles';
import { Data } from '../../theme/'

export default class AccountChat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { image,title,time,message } = this.props;
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={image}
                        style={{width: 40,height: 40, borderRadius: 20}}
                    />
                </View>
                <View style={styles.nameContainer} >
                    <View style= {styles.name}>
                        <Text style={styles.nameText}>{title}</Text>
                    </View>
                    <View style= {styles.message}>
                        <Text style={styles.messageText}>{message}</Text>
                    </View>
                </View>
                <View style={styles.time}>
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
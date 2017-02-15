import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './AccountChatStyles';
import { Data,Colors } from '../../theme/'

export default class AccountChat extends Component {
    constructor(props) {
        super(props);
    }
    renderMessage() {
        switch(this.props.type) {
            case 'call':
                return(
                    <Text style={styles.messageText}>{this.props.username}</Text>
                );
            default: 
                return(
                    <Text style={styles.messageText}>{this.props.message}</Text>
                );    
        }
    }
    renderRightComponent() {
        switch(this.props.type) {
            case 'call':
                return (
                    <View style={styles.call}>
                        <TouchableOpacity style={{flex:1}}>
                            <IonIcons name="md-call" size={22} color={Colors.primaryColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}}>
                            <IonIcons name="md-videocam" size={22} color={Colors.primaryColor} />
                        </TouchableOpacity>
                    </View>
                );
            default: 
                return (
                    <View style={styles.time}>
                        <Text style={styles.timeText}>{this.props.time}</Text>
                    </View>
                    
                );
        }
    }

    render() {
        const { image,title,time,message } = this.props;
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={image}
                        style={{width: 30,height: 30, borderRadius: 15}}
                    />
                </View>
                <View style={styles.nameContainer} >
                    <View style= {styles.name}>
                        <Text style={styles.nameText}>{title}</Text>
                    </View>
                    <View style= {styles.message}>
                        {this.renderMessage()}
                    </View>
                </View>
                    {this.renderRightComponent()}
            </TouchableOpacity>
        );
    }
}
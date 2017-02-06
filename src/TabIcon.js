import React, { Component } from 'react';
import { Text,View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Colors } from './theme/'

export default class TabIcon extends Component {
    render() {
        const { tabIcon,selected } =this.props;
        const SELECTED_ITEMS = selected? Colors.primaryColor : Colors.secondaryBlackColor
        
        return (
            <IonIcons name={tabIcon} size={22} color={SELECTED_ITEMS} />
        );
    }
}
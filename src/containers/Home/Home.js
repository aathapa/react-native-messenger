import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
                <Text>Home</Text>
            </View>
        );
    }
}
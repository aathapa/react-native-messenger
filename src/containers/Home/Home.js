import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './HomeStyle';
import { MyStatusBar,NavBar,Card } from '../../components/';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.homeContainer}>
                <View>
                    <MyStatusBar />
                </View>
               <View style={styles.NavBarContainer}>
                    <NavBar />
               </View>
                <View>
                    <Card>
                        <Text>saf</Text>
                    </Card>
                </View>
                
            </View>
        );
    }
}
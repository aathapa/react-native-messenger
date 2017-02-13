import React, { Component } from 'react';
import { Text,View,ListView,ScrollView } from 'react-native';
import styles from './HomeStyle';
import { MyStatusBar,NavBar,Card } from '../../components/';
import { Images } from '../../theme/';
import { AccountList } from '../../containers/';
    

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    /*
    renderAccountList() {
        return favouriteAccount.map((favouritelist) =>
            <AccountList key={favouritelist.title} favouritelist={favouritelist} />
        );
    }
    */
   
    render() {
        return (
            <View style={styles.homeContainer}>
                <View>
                    <MyStatusBar />
                </View>
               <View style={styles.NavBarContainer}>
                    <NavBar />
               </View>
               <ScrollView>
                   <AccountList />
               </ScrollView>
               
                
            </View>
        );
    }
}
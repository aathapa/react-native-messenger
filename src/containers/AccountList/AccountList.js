import React, { Component } from 'react';
import { Text,View,Image } from 'react-native';
import styles from './AccountListStyle';
import { Card,AccountChat } from '../../components/';
import { Data } from '../../theme/';

class AccountList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                <Card>
                    <AccountChat 
                        image={Data.favouritelist.deepak.images}
                        title={Data.favouritelist.deepak.title}
                        time={Data.favouritelist.deepak.time}
                        message={Data.favouritelist.deepak.message}
                    />
                    <AccountChat 
                        image={Data.favouritelist.bishal.images}
                        title={Data.favouritelist.bishal.title}
                        time={Data.favouritelist.bishal.time}
                        message={Data.favouritelist.bishal.message}
                    />
                    <AccountChat 
                        image={Data.favouritelist.mahesh.images}
                        title={Data.favouritelist.mahesh.title}
                        time={Data.favouritelist.mahesh.time}
                        message={Data.favouritelist.mahesh.message}
                    />
                    <AccountChat 
                        image={Data.favouritelist.top.images}
                        title={Data.favouritelist.top.title}
                        time={Data.favouritelist.top.time}
                        message={Data.favouritelist.top.message}
                    />
                    
                </Card>
                <View style={styles.birthday}>
                    <Text style={styles.birthday}>BIRTHDAY</Text>
                </View>
            </View>
            
            
            
        );
    }
}

export default AccountList;
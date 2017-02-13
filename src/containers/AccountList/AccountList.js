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
                <View>
                    <View style={styles.chatSection}>
                        <Text style={styles.chatSectionText}>BIRTHDAY</Text>
                    </View>
                    <Card>
                        <AccountChat 
                            image={Data.birthdaylist.pamit.images}
                            title={Data.birthdaylist.pamit.title}
                            message={Data.birthdaylist.pamit.message}
                        />
                    </Card>
                </View>
                <View>
                    <View style={styles.chatSection}>
                        <Text style={styles.chatSectionText}>MORE CONVERSATION</Text>
                    </View>
                    <Card>
                        <AccountChat 
                            image={Data.moreconversation.bibek.images}
                            title={Data.moreconversation.bibek.title}
                            time={Data.moreconversation.bibek.time}
                            message={Data.moreconversation.bibek.message}
                        />
                        
                        <AccountChat 
                            image={Data.moreconversation.sudipDhakal.images}
                            title={Data.moreconversation.sudipDhakal.title}
                            time={Data.moreconversation.sudipDhakal.time}
                            message={Data.moreconversation.sudipDhakal.message}
                        />
                        <AccountChat 
                            image={Data.moreconversation.sailesh.images}
                            title={Data.moreconversation.sailesh.title}
                            time={Data.moreconversation.sailesh.time}
                            message={Data.moreconversation.sailesh.message}
                        />
                        <AccountChat 
                            image={Data.moreconversation.bijay.images}
                            title={Data.moreconversation.bijay.title}
                            time={Data.moreconversation.bijay.time}
                            message={Data.moreconversation.bijay.message}
                        />
                        <AccountChat 
                            image={Data.moreconversation.sudeepAcharya.images}
                            title={Data.moreconversation.sudeepAcharya.title}
                            time={Data.moreconversation.sudeepAcharya.time}
                            message={Data.moreconversation.sudeepAcharya.message}
                        />
                        <AccountChat 
                            image={Data.moreconversation.bishalShiwa.images}
                            title={Data.moreconversation.bishalShiwa.title}
                            time={Data.moreconversation.bishalShiwa.time}
                            message={Data.moreconversation.bishalShiwa.message}
                        />
                    </Card>

                </View>
                
                
            </View>
            
            
            
        );
    }
}

export default AccountList;
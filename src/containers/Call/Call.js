import React, { Component } from 'react';
import { Text,View,TouchableOpacity,ScrollView } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './CallStyle';
import { MyStatusBar,NavBar,AccountChat,Card } from '../../components/';
import { Data,Colors } from '../../theme/'


export default class Call extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.callContainer}>
                <View>
                    <MyStatusBar />
                </View>
                <View>
                    <NavBar />
                </View>
                <TouchableOpacity style={styles.groupCall}>
                    <View style={styles.groupIcon}>
                        <IonIcons name="md-people" size={22} color={Colors.primaryColor} />
                    </View>
                    <View style={styles.groupText}>
                        <Text style={styles.callText} >Start Group Call</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.suggestContainer}>
                    <Text style={styles.suggestText}>SUGGESTED</Text>
                </View>
                <ScrollView>
                <View>
                    <AccountChat 
                        image={Data.favouritelist.deepak.images}
                        title={Data.favouritelist.deepak.title}
                        username={Data.favouritelist.deepak.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.favouritelist.bishal.images}
                        title={Data.favouritelist.bishal.title}
                        username={Data.favouritelist.bishal.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.favouritelist.mahesh.images}
                        title={Data.favouritelist.mahesh.title}
                        username={Data.favouritelist.mahesh.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.favouritelist.top.images}
                        title={Data.favouritelist.top.title}
                        username={Data.favouritelist.top.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.birthdaylist.pamit.images}
                        title={Data.birthdaylist.pamit.title}
                        username={Data.birthdaylist.pamit.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.bibek.images}
                        title={Data.moreconversation.bibek.title}
                        username={Data.moreconversation.bibek.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.bijay.images}
                        title={Data.moreconversation.bijay.title}
                        username={Data.moreconversation.bijay.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.bishalShiwa.images}
                        title={Data.moreconversation.bishalShiwa.title}
                        username={Data.moreconversation.bishalShiwa.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.sailesh.images}
                        title={Data.moreconversation.sailesh.title}
                        username={Data.moreconversation.sailesh.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.sudipDhakal.images}
                        title={Data.moreconversation.sudipDhakal.title}
                        username={Data.moreconversation.sudipDhakal.username}
                        type="call"
                    />
                    <AccountChat 
                        image={Data.moreconversation.sudeepAcharya.images}
                        title={Data.moreconversation.sudeepAcharya.title}
                        username={Data.moreconversation.sudeepAcharya.username}
                        type="call"
                    />
                </View>
                                    
                </ScrollView>
            </View>
        );
    }
}
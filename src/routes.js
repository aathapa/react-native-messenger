import React, { Component } from 'react';
import { Router,Scene } from 'react-native-router-flux';
import { WelcomeScreen,Home,Call,Group,Camera,Menu } from './containers/'
import TabIcon from './TabIcon';


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="tabbar"
                        tabBarStyle={styles.tabBarStyle}
                        tabs
                        
                    >
                        <Scene key="home" tabIcon="md-home" component={Home} hideNavBar icon={TabIcon} />
                        <Scene key="call" tabIcon="md-call" component={Call} hideNavBar icon={TabIcon} />
                        <Scene key="camera" tabIcon="md-camera" title="camera" component={Camera} hideNavBar icon={TabIcon} />
                        <Scene key="groups" tabIcon="md-people" component={Group} hideNavBar icon={TabIcon} />
                        <Scene key="memu" tabIcon="md-list" component={Menu} hideNavBar icon={TabIcon} />
                    </Scene>
                    <Scene key= "welcomescreen" component={WelcomeScreen} hideNavBar initial />
                </Scene>
                
            </Router>
        );
    }
}
const styles = {
    tabBarStyle: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, top: 2},
        shadowOpacity: 0.1,
        elevation: 1,
        height: 50,
        backgroundColor: '#fff'
    }
}
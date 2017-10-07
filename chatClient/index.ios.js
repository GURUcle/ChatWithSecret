/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HomePage from './pages/Home';
import FriendPage from './pages/Friend';
import MinePage from './pages/Mine';
import LoginPage from './pages/Login';

import { TabNavigator,StackNavigator } from 'react-navigation'


const RouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            title: '消息',
        }),
    },
    Friend: {
        screen: FriendPage,
        navigationOptions: ({navigation}) => ({
            title: '联系人',
        }),
    },
    Mine: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({
            title: '我的',
        }),
    }
};

const TabNavigatorConfigs = {
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:true,
    lazy:true,
    tabBarOptions:{
        activeTintColor:'#2573b7',
        inactiveTintColor:'#979797',
        labelStyle: {
            fontSize: 12
        },
    }
}

const TabMain = TabNavigator(RouteConfigs, TabNavigatorConfigs);

const StackMain = StackNavigator({
    Login: { screen: LoginPage },
    Home: { screen: TabMain }
});

AppRegistry.registerComponent('chatClient', () => StackMain);

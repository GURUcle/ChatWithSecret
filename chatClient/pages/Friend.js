import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Icon
} from 'react-native';
import { styles } from "../style/common"

export default class FriendPage extends Component {

    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: '联系人',
        headerStyle: {backgroundColor: '#2573b7'},
        headerTitleStyle: {fontSize: 16, color: 'white'},
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/images/addressbook.png')}
                style={ [styles.icon,{tintColor: tintColor}]}
            />
        ),
    });

    render() {
        return (
            <View>
                <Text>
                    this is friend page
                </Text>
            </View>
        )
    };
}


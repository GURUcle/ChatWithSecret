import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Icon
} from 'react-native';
import { styles } from "../style/common"

export default class MinePage extends Component {

    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: '我的',
        headerStyle: {backgroundColor: '#2573b7'},
        headerTitleStyle: {fontSize: 16, color: 'white'},
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/images/setup.png')}
                style={ [styles.icon,{tintColor: tintColor}]}
            />
        ),
    });

    render() {
        return (
            <View>
                <Text>
                    this is mine page
                </Text>
            </View>
        )
    };
}


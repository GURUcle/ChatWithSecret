import React, { Component } from 'react';
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import { styles } from "../style/common";
import  RadiusButton  from  '../component/RadiusButton';
import socket from '../js/socketio';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { uid: new Date().getTime().toString() };
    }
    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: '登录',
        headerStyle: {backgroundColor: '#2573b7'},
        headerTitleStyle: {fontSize: 16, color: 'white'},
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/images/message.png')}
                style={ [styles.icon,{tintColor: tintColor}]}
            />
        ),
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={styles_login.ViewPosition}>
                    <TextInput
                        style={{height: 40, width:200 ,textAlign:'center' }}
                        placeholder="请输入聊天用的名字"
                        value={this.state.uid}
                    />
                    <RadiusButton
                        btnName= '立即聊天'
                        textStyle= {{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle= {{
                            height: 36,
                            borderRadius: 5,
                            marginTop:50
                        }}
                        underlayColor= '#2475b6'
                        onPress={
                            () => {
                                if(!socket.isConnected){
                                    return Alert.alert(
                                    '提示',
                                    '连接服务器异常',
                                    );
                                }

                                if(!this.state.uid ){
                                    return Alert.alert(
                                        '提示',
                                        '请输入用户名',
                                    );
                                }
                                socket.emit('login', this.state.uid );
                                navigate('Home',{uid:this.state.uid});
                            }
                        } >
                    </RadiusButton>
                </View>
            </View>
        )
    };
}

const styles_login = StyleSheet.create({
    ViewPosition: {
        flexDirection:"column",
        height:200,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin:20
    }
});


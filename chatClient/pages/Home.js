import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Icon,
    ScrollView,
    Dimensions
} from 'react-native';
import { styles } from "../style/common"
import socket from '../js/socketio'
import ChatComponent from '../component/ChatComponent';
import {Input,Button,Label} from 'teaset';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        const  _self = this;

        this.state = {
            name:props.username,
            message:'222',
            chats: [{uid:new Date().getTime(),name:"张三",content:"this is test!!!"}]
        };

        socket.on('message',function (data) {
             //console.warn(data);
             if(typeof(data) == 'string'){
                 try{
                     data = JSON.parse(data);
                 }catch(err){
                    data = {uid:new Date().getTime(),name:"web游客",content:data}
                 }
             }
            _self.handleChange(data);
        });
    }

    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: '消息',
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
        const { params } = this.props.navigation.state;
        this.state.username = params.uid;

        var chatsComp =[];
        for (var i = 0; i < this.state.chats.length; i++) {
            chatsComp.push(
                <ChatComponent key={ i } name={ this.state.chats[i].name } content={ this.state.chats[i].content } ></ChatComponent>
            );
        }
        return (
            <View style={styles_home.flexStyle0}>
                <ScrollView style={styles_home.flexStyle1}>
                    { chatsComp }
                </ScrollView>
                <View style={[styles_home.flexStyle2]}>
                    <Input style={ styles_home.InputStyle} value={ this.state.message } onChangeText={(text) => this.setState({message:text})}/>
                    <Button type='primary' size='sm' style={ styles_home.ButtonStyle} onPress={sendMsg.bind(this)}>
                        <Label style={{fontSize: 16,color:"#ffffff"}} text='发送' />
                    </Button>
                </View>
            </View>
        )
    };

    handleChange(val) {
        let tmp = this.state.chats;
        tmp.push(val);
        this.setState({
            chats: tmp
        });
    }
}

function sendMsg(){
    //console.warn(this.state);
    if(this.state.message){
        socket.emit('message',{"type":"public","content":this.state.message,"name":this.state.username});
        //添加到界面
        this.handleChange({"type":"public","content":this.state.message,"name":this.state.username});
    }
}


var styles_home = StyleSheet.create({
    flexStyle0:{
        flex: 1,
        backgroundColor:"#ffffff"
    },
    flexStyle1:{
        height:Dimensions.get('window').height - 210,
    },
    flexStyle2:{
        height:40,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        width: Dimensions.get('window').width
    },
    ButtonStyle:{
        width:90,
        height:36,
        marginLeft:5
    },
    InputStyle:{
        width:Dimensions.get('window').width - 115,
        height:36
    }
});

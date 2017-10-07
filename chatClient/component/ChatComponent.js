import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Icon
} from 'react-native';
import { styles } from "../style/common"

export default class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name:props.name,content:props.content };
    }
    render() {
        return (
            <View style={ styles_chat.parentView }>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={styles.icon}
                        source={require('../static/images/photo.png')}
                    />
                    <Text style={[styles.titleText,styles_chat.name_text]} >
                        { this.state.name}
                    </Text>
                </View>
                <View>
                    <Text style={[styles.titleText,styles_chat.content_text]}>
                        { this.state.content}
                    </Text>
                </View>
            </View>
        )
    };
}

const styles_chat = StyleSheet.create({
    parentView:{
      marginBottom:10
    },
    name_text: {
        marginTop:5,
        marginLeft:5,
        fontSize:14
    },
    content_text:{
        marginLeft:35,
        fontSize:16
    }
});

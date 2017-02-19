/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Main = require('./main');


var LaunchImage = React.createClass({
    render(){
        return (
            //这里需要定时
            <Image source={{uri: 'launchimage'}} style={styles.lauchImageStyle}/>
        );
    },
    //复杂的操作：定时器  网络请求这些
    componentDidMount(){
        //隔2秒钟切换到 Main
        setTimeout(() => {
            //页面切换
            this.props.navigator.replace({
                component: Main,//具体路由的版块
            });
        }, 500);
    }
});

const styles = StyleSheet.create({
    lauchImageStyle: {
        flex: 1,
    }
});
//输出组件类
module.exports = LaunchImage;


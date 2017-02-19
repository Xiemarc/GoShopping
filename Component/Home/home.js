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
    TextInput,
    Image,
    Platform,
    TouchableOpacity,
    StatusBar
} from 'react-native';
//得到屏幕的信息
var Dimension = require('Dimensions');
var screenW = Dimension.get('window').width;
var screenH = Dimension.get('window').height;

var HomeDetail = require('./homeDetail');
var Home = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(255,96,0,1)"
                    barStyle="light-content"
                />
                {/*首页导航*/}

                {this.renderNavBar()}

                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text style={styles.welcome}>
                        Home页面
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    //首页导航条
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text style={styles.leftTitleStyle}>郑州</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家,品类,商圈" style={styles.topInputStyle} underlineColorAndroid={'white'}/>
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    //跳转到二级页面
    pushToDetail(){
        this.props.navigator.push({
            component: HomeDetail,//要跳转的版块
            title: '详情页'
        });
    }

});


const styles = StyleSheet.create({
    // 导航栏
    navBarStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection: 'row',
        // 侧轴对齐方式 垂直居中
        alignItems: 'center',
        // 主轴对齐方式
        justifyContent: 'space-around', // 平均分布
    },
    // 导航条左侧文字
    leftTitleStyle: {
        color: 'white',
    },
    // 导航栏输入框
    topInputStyle: {
        width: screenW * 0.71,
        height: Platform.OS === 'ios' ? 35 : 33,
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 18 : 0,
        // 圆角
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 10,
    },
    // 导航条右侧视图
    rightNavViewStyle: {
        flexDirection: 'row',
        height: 64,
        // 侧轴对齐方式
        alignItems: 'center',
        // backgroundColor:'blue',
    },
    // 导航栏右侧图片
    navRightImgStyle: {
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24,
    },
    container: {
        flex: 1,
        //主轴对其方式
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = Home;


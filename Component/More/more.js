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
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

//引入外部组件
var CommonCell = require('./CommonCell');

var More = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                {/*放入scrollview为了能够滚动*/}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="扫一扫"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="邀请好友使用"
                        />
                        <CommonCell
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于"
                        />
                        <CommonCell
                            title="联系我们"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='人间精品'
                        />
                        <CommonCell
                            title='人间精品'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    //导航条
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:19, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert("点解了")}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    // 导航栏右侧图片
    navImageStyle: {
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24,


    },
    rightViewStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection: 'row',
        // 侧轴对齐方式 垂直居中
        alignItems: 'center',
        // 主轴对齐方式
        justifyContent: 'center', // 平均分布
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = More;


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
    ScrollView,
} from 'react-native';
//导入外部组件
var MyCell = require('./CommonMyCell');
var MiddleView = require('./minemiddleview');
var HeaderView = require('./HeaderView');

var Mine = React.createClass({
    render(){
        return (
            <ScrollView
                style={styles.scrollviewStyle}
                contentInset={{top:-200}}
                contentOffset={{y:200}}
            >
                <HeaderView/>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MiddleView/>
                </View>


                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="钱包"
                        rightIconName=""
                        rightTitle="账户余额：$120"
                    />

                    <MyCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightIconName=""
                        rightTitle="10张"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />

                </View>


                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        rightIconName="me_new"
                    />

                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店，招财进宝"
                    />

                </View>
            </ScrollView>
        );

    }

});


const styles = StyleSheet.create({
    scrollviewStyle: {
        backgroundColor: '#e8e8e8',
    },
});
module.exports = Mine;

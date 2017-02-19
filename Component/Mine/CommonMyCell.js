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
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';

var MyCell = React.createClass({
    //别的界面传值
    getDefaultProps(){
        return {
            leftIconName: '',//左侧图片
            leftTitle: '',//左侧title
            rightIconName: '',//右侧图片
            rightTitle: ''//右侧title
        }
    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边 放一个图片一个文字*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );

    },
    //右边内容
    rightSubView(){
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
            </View>
        );
    },
    //右边具体返回的值
    renderRightContent(){
        if (this.props.rightIconName.length === 0) {
            //不返回图片
            return (
                <Text style={{color:'gray',marginRight:5}}>{this.props.rightTitle}</Text>
            )
        } else {
            //返回图片
            return (
                <Image source={{uri: this.props.rightIconName}}
                       style={{width:24,height:13,marginRight:8,marginLeft:5}}/>
            )
        }
    },

});


const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            //主轴对齐方式
            justifyContent: 'space-between',
            //背景颜色
            backgroundColor: 'white',
            //垂直居中
            alignItems: 'center',
            height: Platform.OS === 'ios' ? 40 : 38,
            //下边框
            borderBottomColor: '#e8e8e8',
            borderBottomWidth: 0.5

        },
        leftViewStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 8
        },
        rightViewStyle: {},
        leftImageStyle: {//左边图片
            width: 24,
            height: 24,
            marginRight: 6,
            //设置圆角
            borderRadius: 12
        },
        leftTitleStyle: {
            fontSize: 16
        },
    }
);

module.exports = MyCell;

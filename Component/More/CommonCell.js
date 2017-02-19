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
    Switch
} from 'react-native';

var CommonCell = React.createClass({
    //得到外界传过来的参数
    getDefaultProps(){
        return {
            title: '',//标题
            isSwitch: false,//是否展示开关
            rightTitle: ''//右侧的文字
        }
    },

    getInitialState(){
        //拿个变量标识下开关的值
        return {
            isOn: false
        }
    },

    render(){
        return (
            <TouchableOpacity onPress={()=>{alert(this.props.title)}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );

    },
    //cell右边显示内容
    renderRightView(){
        //判断是否展示开关
        if (this.props.isSwitch) {//展示开关
            return (
                <Switch value={this.state.isOn ===true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}}
                        style={{marginRight:8}}/>
            )
        }
        else {
            return (
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                </View>
            )
        }

    },
    rightTitle(){
        if (this.props.rightTitle.length > 0) {
            return (
                <Text style={{color:'gray',marginRight:6}}>{this.props.rightTitle}</Text>
            )
        }
    }
});


const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 40 : 42,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        //确定主轴方向
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: "space-between",
        //垂直居中
        alignItems: 'center',
    },
});
module.exports = CommonCell;

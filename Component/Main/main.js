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
    Image,
    Platform,
    Navigator,
    View
} from 'react-native';
//引入navigator
import TabNavigator from 'react-native-tab-navigator';
// 导入外部组件类
var Home = require('../Home/home');
var Shop = require('../Shop/shop');
var Mine = require('../Mine/mine');
var More = require('../More/more');


var Main = React.createClass({

    // 构造函数

    getInitialState(){
        return {
            selectedTab: 'home'
        }
    },

    render() {
        return (
            <TabNavigator>
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home, 1)}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', '商家', Shop)}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}
            </TabNavigator>
        );
    },

    renderTabBarItem(title, icon_name, icon_name_selected, selectedTab, componentName, Component, badgeText) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{ uri: icon_name}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{ uri: icon_name_selected }} style={styles.iconStyle} />}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab}) }
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{ name: componentName, component: Component }}
                    //配置场景
                    configureScene=
                        {
                          (route) => {

                            //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                            //使用手势
                            return Navigator.SceneConfigs.PushFromRight;
                            //不适用手势 把gestures设置为null
                            //return({
                             //   ...Navigator.SceneConfigs.PushFromRight,
                            //    gestures:null,
                            //});
                          }
                        }
                    renderScene={
              (route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }
            }/>
            </TabNavigator.Item>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },
    selectedTitleStyle: {
        color: 'red'
    }
});

module.exports = Main;


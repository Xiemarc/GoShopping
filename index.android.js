/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

// import Main from './Component/Main/main';

var LaunchImage = require('./Component/Main/LaunchImage');
export default class GoShopping extends Component {
    render() {
        return (
            //  <Main/>
            <Navigator
                initialRoute={{ name: '启动页', component: LaunchImage }}
                //配置场景
                configureScene=
                    {
                      () => {

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
        );
    }
}

AppRegistry.registerComponent('GoShopping', () => GoShopping);

/**
 * Created by xiang on 2017/11/1.
 * 生命周期管理
 */
import React from 'react';
import {View, StyleSheet, StatusBar, Platform, NativeModules} from 'react-native';
import * as util from './base.component.util';
export default class ComponentLifecycle extends React.Component {
    constructor(props) {
        super(props);
        util.log();
    }

    getDefaultProps() {

    }

    getInitialState() {

    }

    componentWillMount() {

    }

    render() {

    }

    //运行中
    componentDidMount() {

    }

    //属性改变(props)
    componentWillReceiveProps() {

    }

    //状态改变(state)
    shouldComponentUpdate() {

    }

    //当shouldComponentUpdate=true
    componentWillUpdate() {

    }

    componentDidUpdate() {
    }

    //卸载
    componentWillUnmount() {

    }

    componentDidCatch(){
        util.log('render error')
    }

}
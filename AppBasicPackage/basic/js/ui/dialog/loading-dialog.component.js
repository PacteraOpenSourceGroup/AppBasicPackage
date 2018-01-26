/**
 * @author Winter
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';
import * as ScreenUtils from '../../tools/uitools/screen.util'

export default class Loading extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='white'
                    style={[styles.centering, {height: 80}]}
                    size="small"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        width: ScreenUtils.screenW,
        height: ScreenUtils.screenH,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

});
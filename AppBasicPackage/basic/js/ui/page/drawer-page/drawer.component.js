/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/31]
 * @date 2017/10/31
 * @description
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';
import * as Color from 'RES/color';

export default class DrawerComponent extends Component {
    render() {
        let arras = ['item'];
        arras=arras.concat(arras);
        arras=arras.concat(arras);
        arras=arras.concat(arras);
        arras=arras.concat(arras);
        arras=arras.concat(arras);
        arras=arras.concat(arras);

        return (
            <ScrollView style={styles.container}>
                {arras.map((item, index) => {
                    return (
                        <Text key={index}>{item + index}</Text>
                    );
                })}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});
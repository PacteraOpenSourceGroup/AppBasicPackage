/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description app.component.js
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {AppNavigatorRedux} from './app-navigator';

export function App({store}) {
    return (
        <Provider store={store} style={styles.container}>
            <View style={styles.container}>
                <AppNavigatorRedux/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
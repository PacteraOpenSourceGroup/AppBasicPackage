// @flow
import React from 'react';
import {View, StyleSheet, StatusBar, Platform, NativeModules} from 'react-native';
import * as ScreenUtil from 'TOOLS/uitools/screen.util';

export const getStatusHeight = () => {
    let height = (Platform.OS === 'ios' ? ScreenUtil.scaleSize(44) :
        NativeModules.VersionAndroid.SDK_INT >= 21 ? StatusBar.currentHeight : 0);
    return height;
};
const styles = StyleSheet.create({
    container: {
        // reserve space for iOS status bar to prevent
        // that other components are rendered above it.
        height: getStatusHeight(),
        backgroundColor: 'transparent',
    },
});

export type AppStatusBarProps = {
    barStyle?: string,
    contentStyle?:View.propTypes.style,
};

export function AppStatusBar({
                                 barStyle = 'dark-content',
                                 contentStyle,
                             }: AppStatusBarProps) {
    return (
        <View style={[styles.container,contentStyle]}>
            <StatusBar barStyle={barStyle} backgroundColor="transparent" translucent={true}/>
        </View>
    );
}

AppStatusBar.defaultProps = {
    barStyle: 'dark-content',
};

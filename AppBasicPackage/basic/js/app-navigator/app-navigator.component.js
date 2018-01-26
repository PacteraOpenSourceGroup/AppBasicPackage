/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description app-navigator.component.js
 */

import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {TabNavigator} from './tab-navigator';
import * as COLOR from 'RES/color';
import DrawerComponent from 'UI/page/drawer-page';
import DialogPage from 'UI/page/demo-page/dialog-page'

import {View} from 'react-native';
import React from 'react';
import * as ScreenUtil from 'TOOLS/uitools/screen.util';
import * as Contants from './constants';
export const AppNavigator = DrawerNavigator(
    {
        [Contants.DEFAULT]: {
            screen: TabNavigator,
        },
        [Contants.DIALOGPAGE]: {
            screen: DialogPage
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: COLOR.WHITE,
        },
        drawerWidth: ScreenUtil.scaleSize(350),
        drawerPosition: 'left',
        contentComponent: props => <View style={{width: '100%', flex: 1}}><DrawerComponent {...props}/></View>,
        drawerBackgroundColor: 'rgb(53, 73, 94)'

    },
);

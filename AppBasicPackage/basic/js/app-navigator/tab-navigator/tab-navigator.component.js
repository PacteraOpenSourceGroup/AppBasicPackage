// @flow

import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabNavigator as TabNavigatorRN, TabBarBottom as TabBarBottomRN} from 'react-navigation';

import * as COLOR from 'RES/color';
import * as ScreenUtil from '../../tools/uitools/screen.util';
import {i18n} from 'BASIC/js/i18n';
import HomePage from 'UI/page/home-page';
import DemoPage from 'UI/page/demo-page'
import DonatePage from 'UI/page/donate-page'
import * as Contants from '../constants';

const styles = StyleSheet.create({
    icon: {
        width: ScreenUtil.scaleSize(48),
        height: ScreenUtil.scaleSize(48),
    }
});

const addDefaultNavigationOptions = options => ({
    activeTintColor: COLOR.WHITE,
    inactiveTintColor: COLOR.MEDIUM_GRAY,
    ...options,
});

const HOME_ICON_NORMAL = require('RES/img/home_normal.png');
const HOME_ICON_ACTIVE = require('RES/img/home_active.png');
const DEMO_ICON_NORMAL = require('RES/img/demo_normal.png');
const DEMO_ICON_ACTIVE = require('RES/img/demo_active.png');
const DONATE_ICON_NORMAL = require('RES/img/donate_normal.png');
const DONATE_ICON_ACTIVE = require('RES/img/donate_active.png');
const iconCreatorFor = (active, inactive) =>
    function createIcon({focused}: any) {
        return (
            <Image
                source={focused ? active : inactive}
                style={styles.icon}
                resizeMode="stretch"
            />
        );
    };

const ROUTES = {
    [Contants.HOME]: {
        screen: HomePage,
        navigationOptions: addDefaultNavigationOptions({
            tabBarLabel: 'home.tab_home',
            tabBarIcon: iconCreatorFor(HOME_ICON_ACTIVE, HOME_ICON_NORMAL),
        }),
    },
    [Contants.DEMO]: {
        screen: DemoPage,
        navigationOptions: addDefaultNavigationOptions({
            tabBarLabel: 'home.tab_demo',
            tabBarIcon: iconCreatorFor(DEMO_ICON_ACTIVE, DEMO_ICON_NORMAL),
        }),
    },
    [Contants.DONATE]: {
        screen: DonatePage,
        navigationOptions: addDefaultNavigationOptions({
            tabBarLabel: 'home.tab_donate',
            tabBarIcon: iconCreatorFor(DONATE_ICON_ACTIVE, DONATE_ICON_NORMAL),
        }),
    },
};

const CONFIG = {
    tabBarComponent: TabBarBottomRN,
    tabBarPosition: 'bottom',
    lazy: true,
    initialRouteName: 'Home',
    tabBarOptions: {
        style: {
            borderTopWidth: ScreenUtil.scaleSize(1),
            borderTopColor: '#efefef'
        },
        labelStyle: {
            fontSize: ScreenUtil.scaleSize(20),
        },
        activeTintColor: '#d81e06',
        inactiveTintColor: '#8a8a8a',
    },
};

export const TabNavigator = TabNavigatorRN(ROUTES, CONFIG);

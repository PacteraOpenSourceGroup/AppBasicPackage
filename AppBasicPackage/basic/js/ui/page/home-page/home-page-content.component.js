/**
 * @author Yasin
 * @version [React-Native V01, 2017/11/1]
 * @date 2017/11/1
 * @description
 */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Cell} from '../../widget/cell';

const ICON_DEMO = require('RES/img/demo_active.png');
const ICON_DONATE = require('RES/img/donate_active.png');
const ICON_GITHUB = require('RES/img/icon_github.png');
const ICON_LOGO = require('RES/img/icon_logo.png');
import * as ScreenUtil from 'TOOLS/uitools/screen.util';
import * as COLOR from 'RES/color';

import {Switch}from '../../widget/switch';

export function HomePageContainer({i18n,onDemoClick,onDonateClick,onStarClick}) {
    return (
        <View style={styles.container}>
            <Switch/>
            <Image
                style={styles.logoStyle}
                source={ICON_LOGO}
            />
            <Text style={styles.versionStyle}>v1.0.0</Text>
            <Cell
                style={[styles.cellBorderStyle, {marginTop: ScreenUtil.scaleSize(60)}]}
                title={i18n.t('home.live_demo')}
                leftIcon={ICON_DEMO}
                titleStyle={styles.titleStyle}
                leftIconStyle={styles.leftIconStyle}
                rightIconStyle={styles.rightIconStyle}
                onItemClick={onDemoClick}
            />
            <Cell
                style={[styles.cellBorderStyle, {marginTop: ScreenUtil.scaleSize(30), borderBottomWidth: 0}]}
                title={i18n.t('home.buy_me_coffee')}
                leftIcon={ICON_DONATE}
                titleStyle={styles.titleStyle}
                rightIconStyle={styles.rightIconStyle}
                onItemClick={onDonateClick}
                desc={() => {
                    return (
                        <View style={styles.donateStyle} key="desc">
                            <Text style={styles.donateTextStyle}>{i18n.t('home.donate')}</Text>
                        </View>
                    );
                }}
            />
            <View style={{backgroundColor: COLOR.WHITE}}><View style={styles.lineStyle}/></View>
            <Cell
                style={[styles.cellBorderStyle, {borderTopWidth: 0}]}
                title={i18n.t('home.gitee')}
                leftIcon={ICON_GITHUB}
                titleStyle={styles.titleStyle}
                leftIconStyle={styles.leftIconStyle}
                rightIconStyle={styles.rightIconStyle}
                desc={i18n.t('home.star_me')}
                descStyle={styles.titleStyle}
                onItemClick={onStarClick}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    logoStyle: {
        width: ScreenUtil.scaleSize(66 * 1.8),
        height: ScreenUtil.scaleSize(58 * 1.8),
        marginTop: ScreenUtil.scaleSize(60),
        borderRadius: ScreenUtil.scaleSize(5),
        alignSelf: 'center',
    },
    cellStyle: {
        padding: ScreenUtil.scaleSize(10),
        width: '100%',
    },
    cellBorderStyle: {
        borderBottomColor: COLOR.BORDER_LINE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: COLOR.BORDER_LINE,
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: COLOR.WHITE,
    },
    versionStyle: {
        color: COLOR.FONT_999999,
        fontSize: ScreenUtil.scaleSize(26),
        marginTop: ScreenUtil.scaleSize(20),
        alignSelf: 'center',
    },
    titleStyle: {
        color: COLOR.FONT_333333,
        fontSize: ScreenUtil.scaleSize(26),
        marginLeft: ScreenUtil.scaleSize(20),
    },
    leftIconStyle: {
        width: ScreenUtil.scaleSize(45),
        height: ScreenUtil.scaleSize(45),
    },
    rightIconStyle: {
        width: ScreenUtil.scaleSize(30),
        height: ScreenUtil.scaleSize(30),
    },
    donateStyle: {
        backgroundColor: COLOR.RED,
        height: ScreenUtil.scaleSize(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ScreenUtil.scaleSize(19),
        paddingHorizontal: ScreenUtil.scaleSize(5),
    },
    donateTextStyle: {
        color: COLOR.WHITE,
        fontSize: ScreenUtil.scaleSize(22),
        backgroundColor: 'transparent'
    },
    lineStyle: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: COLOR.BORDER_LINE,
        marginHorizontal: ScreenUtil.scaleSize(30),

    }
});
/**
 * Created by shizhang.cai on 2017/10/30.
 */

import {
    View,
    StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';
import React, {Component} from 'react';
import {CommonButton} from '../../widget/button';
import {NavigationBar} from '../../widget/navigator';
import {AppStatusBar} from '../../widget/app-status-bar';
import * as ScreenUtil from 'TOOLS/uitools/screen.util';
import * as COLOR from 'RES/color';

import DATA from './data';
import demoInit from './demo-init';

@demoInit()
export default class DemoPage extends Component {
    render() {
        const {i18n} = this.props;
        return (
            <View contentContainerStyle={styles.container}>
                <AppStatusBar
                    contentStyle={styles.statusStyle}
                    barStyle={'light-content'}
                />
                <NavigationBar
                    showLeft={false}
                    title={'List'}
                    titleStyle={styles.navTitleStyle}
                    navigationStyle={styles.navigationStyle}
                />
                <FlatList
                    horizontal={false}
                    numColumns={3}
                    data={DATA.demos}
                    renderItem={({item, index}) => (
                        <CommonButton
                            key={index}
                            backgroundStyle={this._getColumnWrapperStyle({item, index, count: DATA.demos.length})}
                            title={item.title}
                            isSupportI18n={true}
                            icon={item.icon}
                            iconStyle={styles.iconStyle}
                            textStyle={styles.textStyle}
                            clickedAction={(title) => this._dialogAction(item)}
                        />
                    )}
                />
            </View>
        )
    }

    _dialogAction(item) {
        this.props.navigation.navigate(item.target);
    }

    _getColumnWrapperStyle({item, index, count}) {
        let style = {
            borderColor: COLOR.BORDER_LINE,
            height: ScreenUtil.scaleSize(150),
        };
        const lineWidth = StyleSheet.hairlineWidth;
        if (index % 3 === 0) {
            if (count % 3 === 1 && index === count - 1) {
                Object.assign(style, {
                    borderBottomWidth: lineWidth,
                    borderRightWidth: lineWidth,
                    width: ScreenUtil.screenW / 3,
                    flex: null,
                });
            } else {
                Object.assign(style, {
                    borderBottomWidth: lineWidth,
                });
            }
        } else if (index % 3 === 1) {
            Object.assign(style, {
                borderBottomWidth: lineWidth,
                borderRightWidth: lineWidth,
                borderLeftWidth: lineWidth,
            });
        } else if (index % 3 === 2) {
            Object.assign(style, {
                borderBottomWidth: lineWidth,
            });
        }
        return style;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND,
    },
    textStyle: {
        fontSize: ScreenUtil.scaleSize(26),
        color: COLOR.FONT_999999,
        marginTop: ScreenUtil.scaleSize(5),
    },
    statusStyle: {
        backgroundColor: COLOR.STATUS_COLOR
    },
    navigationStyle: {
        backgroundColor: COLOR.STATUS_COLOR
    },
    navTitleStyle: {
        color: COLOR.WHITE,
    },
    iconStyle: {
        width: ScreenUtil.scaleSize(48),
        height: ScreenUtil.scaleSize(48),
    }
});

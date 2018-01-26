/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/19]
 * @date 2017/10/19
 * @description
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import homeInit from './home-init';
import {NavigationBar} from '../../widget/navigator';
import {AppStatusBar} from '../../widget/app-status-bar';
import {ActionSheet} from '../../widget/action-sheet';
import {HomePageContainer} from './home-page-content.component';
import * as ScreenUtil from 'TOOLS/uitools/screen.util';
import * as COLOR from 'RES/color';
import {NavigationActions} from 'react-navigation';

@homeInit()
export default class HomePage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [{name: 'Language'}, {name: '中文', value: 'zh'}, {name: 'English', value: 'en'}],
            isShowPop: false,
        };
    }

    render() {
        const {i18n} = this.props;
        return (
            <View style={styles.container}>
                {/*render statusbar*/}
                {this._renderNavigator()}
                {/*render content*/}
                {this._renderContent()}
                {/*render language choice*/}
                {this._renderLanguage()}
            </View>
        );
    }

    /**
     * render statusbar
     * @private
     */
    _renderNavigator() {
        const {i18n} = this.props;
        return (
            <View>
                <AppStatusBar
                    contentStyle={styles.statusStyle}
                    barStyle={'light-content'}
                />
                <NavigationBar
                    navigationStyle={styles.navigationStyle}
                    title={i18n.t('home.tab_home')}
                    leftButton={require('RES/img/icon_slider.png')}
                    rightButton={require('RES/img/icon_more.png')}
                    leftButtonStyle={styles.navLeftStyle}
                    rightButtonStyle={styles.navRightStyle}
                    titleStyle={styles.navTitleStyle}
                    onLeftPress={() => {
                        this.props.navigation.navigate('DrawerToggle');
                    }}
                    onRightPress={() => {
                        this.setState({
                            isShowPop: !this.state.isShowPop
                        });
                    }}
                />
            </View>
        );
    }

    /**
     * render language dialog
     * @returns {*}
     * @private
     */
    _renderLanguage() {
        if (this.state.isShowPop) {
            return (
                <ActionSheet
                    ref={ref => this.actionSheet = ref}
                    isShowPop={this.state.isShowPop}
                    data={this.state.data}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    if (index === 0) return;
                                    this.actionSheet && this.actionSheet.stopAni();
                                    this._onLanguageChoiced({item, index});
                                }}
                            >
                                <View style={styles.itemContainer}>
                                    <Text style={[styles.item, {color: index === 0 ? '#999' : '#000'}]}
                                          key={index}>{index == 0 ? this.props.i18n.t('home.language') : item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    onAnimation={(isShow) => {
                        if (this.state.isShowPop !== isShow) this.setState({
                            isShowPop: isShow,
                        });
                    }}
                />
            );
        }
        return null;
    }

    /**
     * on Language Item Click
     * @param item
     * @param index
     * @private
     */
    _onLanguageChoiced({item, index}) {
        const {currentLocale, choiceLocale} = this.props;
        if (item.value !== currentLocale) {
            choiceLocale(item.value);
        }

        // If you want to show only a dialog box on the release of the code
        // this.setState({
        //     isShowPop: false,
        // });
    }

    /**
     * render content of home
     * @private
     */
    _renderContent() {
        const {navigation} = this.props;
        return (
            <HomePageContainer
                {...this.props}
                onDemoClick={() => {
                    this.props.navigation.navigate('Demo');
                }}
                onDonateClick={() => {
                    this.props.navigation.navigate('Donate');
                }}
                onStarClick={()=>{
                    Linking.openURL('https://github.com/PacteraOpenSourceGroup').catch(err => console.error('An error occurred', err));
                }}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND
    },
    statusStyle: {
        backgroundColor: COLOR.STATUS_COLOR
    },
    navigationStyle: {
        backgroundColor: COLOR.STATUS_COLOR
    },
    navLeftStyle: {
        width: ScreenUtil.scaleSize(35),
        height: ScreenUtil.scaleSize(35),
        marginLeft: ScreenUtil.scaleSize(30),
    },
    navRightStyle: {
        width: ScreenUtil.scaleSize(48),
        height: ScreenUtil.scaleSize(48),
    },
    navTitleStyle: {
        color: COLOR.WHITE,
    },
    itemContainer: {
        width: '100%',
        padding: ScreenUtil.scaleSize(20),
        borderBottomColor: '#efefef',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        color: '#000',
        fontSize: ScreenUtil.scaleSize(28),
    },
});
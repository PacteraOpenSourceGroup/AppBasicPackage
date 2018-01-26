/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description app-navigator-redux.component.js
 */

import React from 'react';
import {View, StyleSheet, BackHandler, Platform, ToastAndroid} from 'react-native';


import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {navigationSelectors} from '../redux/reducers/navigation';
import {loadingDialogSelector} from '../redux/reducers/dialog';
import {AppNavigator} from './app-navigator.component';

import {LoadingDialog} from '../ui/dialog'
import {i18nSelector} from 'REDUX/reducers/i18n';
import {i18n} from 'BASIC/js/i18n';

const mapStateToProps = state => {
    const currentLocale = i18nSelector.getCurrLocale(state);
    i18n.locale = currentLocale;
    return ({
        nav: navigationSelectors.getNavigationState(state).nav,
        isShowLoadingDialog: loadingDialogSelector.showLoadingDialog(state),
        currentLocale,
        i18n,
    });
}
@connect(mapStateToProps)
export default class AppNavigatorRedux extends React.Component {

    render() {
        let {dispatch, nav, isShowLoadingDialog} = this.props;
        return (
            <View style={styles.container}>
                <AppNavigator
                    navigation={
                        addNavigationHelpers({
                            dispatch: dispatch,
                            state: nav,
                        })
                    }
                />
                {isShowLoadingDialog ? ( <LoadingDialog/>) : null}
            </View>
        );
    }

    componentDidMount() {
        if (Platform.OS === 'android') BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav,i18n} = this.props;
        if (nav.index === 0) {
            let routes = nav.routes;
            if (routes[0].index === 0) {
                if (!this.isFirst) {
                    this.isFirst = true;
                    ToastAndroid.show(i18n.t('home.exit'), ToastAndroid.SHORT);
                    if (this.timer) clearTimeout(this.timer);
                    this.timer = setTimeout(() => {
                        this.isFirst = false;
                    }, 1000);
                    return true;
                } else {
                    return false;
                }
            }
        }
        dispatch(NavigationActions.back());
        return true;
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
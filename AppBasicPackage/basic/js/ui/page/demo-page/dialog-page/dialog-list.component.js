/**
 * Created by shizhang.cai on 2017/10/30.
 */
import {
    View,
    StyleSheet,
    FlatList,
    NativeModules,
    Dimensions
} from 'react-native';
import React, {Component} from 'react';
import {CommonButton} from '../../../widget/button';
import {NavigationBar} from '../../../widget/navigator';
import {AppStatusBar} from '../../../widget/app-status-bar';
import * as COLOR from 'RES/color';
const screenW = Dimensions.get('window').width;
const dialog = NativeModules.PDialogModule;
const datas = [
    '加载Dialog',
    '消息Dialog',
    '单确认按钮Dialog',
    '单确认按钮Dialog',
    '取消按钮Dialog',
    '单选没有确认按钮Dialog',
    '单选Dialog',
    '多选Dialog',
    '日期选择Dialog',
    '分享'
];

export default class DialogList extends Component {
    render() {
        return (
            <View contentContainerStyle={styles.container}>
                <AppStatusBar
                    contentStyle={styles.statusStyle}
                    barStyle={'light-content'}
                />
                <NavigationBar
                    title={'Dialog-List'}
                    titleStyle={styles.navTitleStyle}
                    navigationStyle={styles.navigationStyle}
                    onLeftPress={() => {
                        this.props.navigation.goBack();
                    }}
                />

                <FlatList
                    horizontal={false}
                    data={datas}
                    renderItem={({item, index}) => (
                        <CommonButton
                            key={index}
                            title={item}
                            backgroundStyle={styles.backgroundStyle}
                            textStyle={styles.textStyle}
                            clickedAction={(title) => this._dialogAction(title)}
                        />
                    )}
                />
            </View>
        )
    }

    _dialogAction(title) {
        switch (title) {
            case datas[0]:
                dialog.showLoadingDialog(() => {
                });
                break;
            case datas[1]:
                dialog.showMsgDialog(() => {
                });
                break;
            case datas[2]:
                dialog.showSingleConfrimDialog(() => {
                });
                break;
            case datas[3]:
                dialog.showDialog(() => {
                });
                break;
            case datas[4]:
                dialog.showSingleDialog(() => {
                });
                break;
            case datas[5]:
                dialog.showSingleChooseDialog(() => {
                });
                break;
            case datas[6]:
                dialog.showMultiChoiceDialog(() => {
                });
                break;
            case datas[7]:
                dialog.showDatePickerDialog(() => {
                });
                break;
            case datas[8]:
                dialog.showShareDialog(() => {
                });
                break;
            default:
                break;
        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    buttonStyle: {
        paddingTop: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize:21,
        color:'white'
    },
    backgroundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenW,
        height: 50,
        marginTop: 2,
        backgroundColor: COLOR.STATUS_COLOR
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
});
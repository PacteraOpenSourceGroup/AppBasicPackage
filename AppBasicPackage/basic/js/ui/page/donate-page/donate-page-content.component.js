/**
 * @author Yasin
 * @version [React-Native V01, 2017/11/1]
 * @date 2017/11/1
 * @description
 */
import React from 'react';
import {View, StyleSheet, Image, Text, ART} from 'react-native';
import * as ScreenUtil from 'TOOLS/uitools/screen.util';
import * as COLOR from 'RES/color';

const ART_HEIGHT = ScreenUtil.scaleSize(180);

export class DonateContainer extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            textHeight: 0
        };
    }

    render() {
        const path = ART.Path();
        path.moveTo(ScreenUtil.screenW, 0)
            .arc(-ScreenUtil.screenW, 0, ScreenUtil.screenH)
            .lineTo(0, ART_HEIGHT)
            .lineTo(ScreenUtil.screenW, ART_HEIGHT)
            .close();
        const {i18n} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.wechatStyle}
                        source={require('RES/img/icon_wechat_yasin.png')}
                    />
                </View>
                <View style={styles.artContainer}>
                    <ART.Surface
                        style={styles.arcLineContainer}
                        width={'100%'}
                        height={ART_HEIGHT}
                    >
                        <ART.Shape d={path} stroke="#fff" strokeWidth={1} fill="rgb(212,172,8)"/>
                    </ART.Surface>
                    <Text
                        style={[styles.descStyle, {top: this._caculateTextTop()}]}
                        onLayout={(event) => {
                            let {nativeEvent: {layout: {height}}} = event;
                            if (this.state.textHeight !== height) {
                                this.setState({
                                    textHeight: height,
                                });
                            }
                        }}
                    >{i18n.t('donate.donate')}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text style={styles.descTextStyle}>{i18n.t('donate.donate_desc')}</Text>
                </View>
            </View>
        );
    }

    _caculateTextTop() {
        const radius = ScreenUtil.screenH;
        let result = radius - Math.round(Math.sqrt(radius * radius - (ScreenUtil.screenW / 2) * (ScreenUtil.screenW / 2)));
        let top1 = (ART_HEIGHT - result) / 2;
        let top2 = top1 - this.state.textHeight / 2;
        return result + top2;
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    artContainer: {
        width: '100%',
    },
    arcLineContainer: {
        backgroundColor: 'white'
    },
    descStyle: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: ScreenUtil.scaleSize(30),
    },
    wechatStyle: {
        marginTop: ScreenUtil.scaleSize(100),
        width: ScreenUtil.scaleSize(622 / 2),
        height: ScreenUtil.scaleSize(616 / 2),
    },
    imageContainer: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center'
    },
    descTextStyle:{
        margin:ScreenUtil.scaleSize(20),
        color: COLOR.FONT_999999,
        fontSize: ScreenUtil.scaleSize(28),
        textAlign:'center',
    }
});
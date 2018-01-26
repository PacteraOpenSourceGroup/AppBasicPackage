/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/31]
 * @date 2017/10/31
 * @description navigation-bar.component.js
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import * as ScreenUtils from 'TOOLS/uitools/screen.util';
import PropTypes from 'prop-types';

export default class NavigationBar extends Component {
    static propTypes = {
        showLeft: PropTypes.bool,
        renderLeft: PropTypes.any,
        onLeftPress: PropTypes.func,
        leftContainerStyle: View.propTypes.style,
        leftButtonStyle: View.propTypes.style,
        rightButtonStyle: View.propTypes.style,
        leftButton: Image.propTypes.source,
        showTitle: PropTypes.bool,
        renderTitle: PropTypes.any,
        titleContainerStyle: View.propTypes.style,
        titleStyle: Text.propTypes.style,
        title: PropTypes.string,
        showRight: PropTypes.bool,
        renderRight: PropTypes.any,
        rightContainerStyle: View.propTypes.style,
        rightStyle: Text.propTypes.style,
        rightText: PropTypes.string,
        onRightPress: PropTypes.func,
        showContainer: PropTypes.bool,
        rightButton: Image.propTypes.source
    }
    static defaultProps = {
        showLeft: true,
        showTitle: true,
        showRight: true,
        showContainer: true
    }

    constructor(props) {
        super(props);
        this._renderRight = this._renderRight.bind(this);
        this._renderLeft = this._renderLeft.bind(this);
        this._renderTitle = this._renderTitle.bind(this);
    }

    _renderLeft() {
        let {showLeft, renderLeft, onLeftPress, leftContainerStyle, leftButtonStyle, leftButton} = this.props;
        let LeftComponent = null;
        if (showLeft) {
            LeftComponent = (renderLeft && renderLeft()) || (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onLeftPress}
                    style={leftContainerStyle || styles.leftContainerDefaultStyle}
                >
                    <Image
                        style={leftButtonStyle || styles.leftArrowDefaultStyle}
                        source={leftButton || require('RES/img/Icon_back_.png')}
                    />
                </TouchableOpacity>
            );
        } else {
            LeftComponent = (<View style={styles.leftContainerDefaultStyle}/>);
        }
        return LeftComponent;
    }

    _renderTitle() {
        let {showTitle, renderTitle, titleContainerStyle, titleStyle, title} = this.props;
        let TitleComponent = null;
        if (showTitle) {
            TitleComponent = (renderTitle && renderTitle()) || (
                <View style={titleContainerStyle}>
                    <Text style={[styles.titleDefaltStyle, titleStyle]} allowFontScaling={false}>{title}</Text>
                </View>
            );
        } else {
            TitleComponent = (<View/>);
        }
        return TitleComponent;
    }

    _renderRight() {
        let {
            rightButton,
            showRight,
            renderRight,
            rightContainerStyle,
            rightStyle,
            rightText,
            onRightPress
        } = this.props;
        let RightComponent = null;
        if (rightButton) {
            RightComponent = (renderRight && renderRight()) || (
                <TouchableOpacity activeOpacity={1} style={rightContainerStyle || styles.rightDefaultContainerStyle}
                                  onPress={onRightPress}>
                    <View style={rightStyle} allowFontScaling={false}>
                        <Image
                            style={this.props.rightButtonStyle}
                            source={rightButton}
                        />
                    </View>
                </TouchableOpacity>
            )
        } else if (showRight) {
            RightComponent = (renderRight && renderRight()) || (
                <TouchableOpacity activeOpacity={1} style={rightContainerStyle || styles.rightDefaultContainerStyle}
                                  onPress={onRightPress}>
                    <Text style={[styles.rightDefaltStyle, rightStyle]} allowFontScaling={false}>{rightText}</Text>
                </TouchableOpacity>
            );
        } else {
            RightComponent = (<View style={styles.rightDefaultContainerStyle}/>);
        }
        ;
        return RightComponent;
    }

    render() {
        let LeftComponent = this._renderLeft();
        let TitleComponent = this._renderTitle();
        let RightComponent = this._renderRight();
        if (!this.props.showContainer) {
            return StatusComponent;
        }
        let navigationBarBackgroundImage = this.props.navigationBarBackgroundImage;

        let ContainerView = navigationBarBackgroundImage ? (
            <Image
                style={[styles.container, this.props.navigationStyle,]}
                source={navigationBarBackgroundImage}
            >
                {LeftComponent}
                {TitleComponent}
                {RightComponent}
            </Image>
        ) : (
            <View style={[styles.container, this.props.navigationStyle,]}>
                {LeftComponent}
                {TitleComponent}
                {RightComponent}
            </View>
        );
        return ContainerView;
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingBottom: ScreenUtils.scaleSize(15),
        paddingTop: ScreenUtils.scaleSize(15),
        width: ScreenUtils.screenW
    },
    leftContainerDefaultStyle: {
        width: ScreenUtils.scaleSize(120),
        height: ScreenUtils.scaleSize(40),
        justifyContent: 'center',
    },
    leftArrowDefaultStyle: {
        width: ScreenUtils.scaleSize(16),
        height: ScreenUtils.scaleSize(24),
        marginLeft: ScreenUtils.scaleSize(31)
    },
    titleDefaltStyle: {
        color: '#000',
        fontSize: ScreenUtils.scaleSize(36)
    },
    rightDefaltStyle: {
        color: '#000',
        fontSize: ScreenUtils.scaleSize(28)
    },
    rightDefaultContainerStyle: {
        width: ScreenUtils.scaleSize(120),
        height: ScreenUtils.scaleSize(40),
        alignItems: 'center',
        justifyContent: 'center',
    }
});

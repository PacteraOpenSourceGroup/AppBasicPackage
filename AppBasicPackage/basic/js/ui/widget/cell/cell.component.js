/**
 * @author Yasin
 * @version [React-Native V01, 2017/11/1]
 * @date 2017/11/1
 * @description
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'

const ICON_RIGHT_ARROW = require('RES/img/icon_right_arrow.png');
export default class Cell extends Component {
    static propTypes = {
        ...View.propTypes,
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        allowTitleScaling: PropTypes.bool,
        leftIcon: Image.propTypes.source,
        leftIconStyle: Image.propTypes.style,
        desc: PropTypes.any,
        descStyle: Text.propTypes.style,
        allowDescScaling: PropTypes.bool,
        rightIcon: Image.propTypes.source,
        rightIconStyle: Image.propTypes.style,
        onItemClick: PropTypes.func,
    };
    static defaultProps = {
        allowTitleScaling: false,
        allowDescScaling: false,
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.props.onItemClick}
                style={[styles.container, this.props.style]}
            >
                {this._renderLeft()}
                {this._renderRight()}
            </TouchableOpacity>
        );
    }

    _renderRight() {
        const {desc, rightIcon, rightIconStyle, descStyle, allowDescScaling} = this.props;
        let rightComponents = [];

        if (typeof desc === 'string') {
            let descCom = (
                <Text key={'1'} style={[styles.rightTitleStyle, descStyle]}
                      allowFontScaling={allowDescScaling}>{desc}</Text>
            );
            rightComponents.push(descCom);
        } else if (typeof desc === 'function') {
            rightComponents.push(desc());
        }
        let rightIconCom = (
            <Image
                key={'2'}
                style={[styles.rightIconStyle, rightIconStyle]}
                source={typeof rightIcon !== 'undefined' ? rightIcon : ICON_RIGHT_ARROW}
            />
        );
        rightComponents.push(rightIconCom);
        if (rightComponents.length > 0) {
            return (
                <View style={[styles.rightContainer]}>
                    {rightComponents}
                </View>
            );
        }
        return null;
    }

    _renderLeft() {
        const {title, leftIcon, leftIconStyle, titleStyle, allowTitleScaling} = this.props;
        let leftComponents = [];
        if (leftIcon) {
            let leftIconCom = (
                <Image
                    key={'3'}
                    style={[styles.leftIconStyle, leftIconStyle]}
                    source={leftIcon}
                />
            );
            leftComponents.push(leftIconCom);
        }
        if (typeof title === 'string') {
            let titleCom = (
                <Text key={'4'} style={[styles.leftTitleStyle, titleStyle]}
                      allowFontScaling={allowTitleScaling}>{title}</Text>
            );
            leftComponents.push(titleCom);
        } else if (typeof title === 'function') {
            leftComponents.push(title());
        }
        if (leftComponents.length > 0) {
            return (
                <View style={[styles.leftContainer]}>
                    {leftComponents}
                </View>
            );
        }
        return null;
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    leftTitleStyle: {
        color: '#000'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTitleStyle: {
        color: '#000'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIconStyle: {
        width: 18,
        height: 18,
    },
    leftIconStyle: {
        width: 18,
        height: 18,
    }
});
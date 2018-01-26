/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/31]
 * @date 2017/10/31
 * @description
 */

import React from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

const screenW = Dimensions.get('window').width;
import PropTypes from 'prop-types';
import * as COLOR from 'RES/color';
import {withLocalisation} from 'TOOLS/commontools';

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        height: screenW / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'red',
    },
    iconStyle: {
        width: 18,
        height: 18
    }
});

class CommonButton extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        backgroundStyle: View.propTypes.style,
        textStyle: View.propTypes.style,
        clickedAction: PropTypes.func,
        isEnabled: PropTypes.bool,
        icon: Image.propTypes.source,
        iconStyle: View.propTypes.style,
        allowFontScaling: PropTypes.bool,
        isSupportI18n: PropTypes.bool,
    };
    static defaultProps = {
        title: 'title',
        backgroundStyle: styles.backgroundStyle,
        textStyle: styles.textStyle,
        isEnabled: true,
        allowFontScaling: true,
        isSupportI18n: false,
    };

    render() {
        const {title, clickedAction, backgroundStyle, textStyle, allowFontScaling, i18n, isSupportI18n} = this.props;
        return (
            <TouchableOpacity
                style={[styles.backgroundStyle, backgroundStyle]}
                activeOpacity={1}
                onPress={() => clickedAction(title)}
            >
                {this._renderIcon()}
                <Text
                    style={textStyle}
                    allowFontScaling={allowFontScaling}
                >
                    {isSupportI18n ? i18n.t(title) : title}
                </Text>
            </TouchableOpacity>
        )
    }

    _renderIcon() {
        const {icon, iconStyle} = this.props;
        if (icon) {
            return (
                <Image
                    style={[styles.iconStyle, iconStyle]}
                    source={icon}
                />
            );
        }
        return null;
    }
}

export default withLocalisation(CommonButton);
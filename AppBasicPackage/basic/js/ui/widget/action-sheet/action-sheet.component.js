/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/31]
 * @date 2017/10/31
 * @description
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    FlatList,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ActionSheet extends Component {
    static propTypes = {
        data: PropTypes.array,
        isShowPop: PropTypes.bool,
        itemContainerStyle: View.propTypes.style,
        innerContainerStyle: View.propTypes.style,
        renderItem: PropTypes.func,
        canCancle: PropTypes.bool,
        onAnimation: PropTypes.func,
    };
    static defaultProps = {
        data: [],
        isShowPop: false,
        canCancle: true,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeAni: new Animated.Value(0),
            innerHeight: 1000,
        };
        this._renderItem = this._renderItem.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {data, isShowPop} = this.props;
        const {innerHeight} = this.state;
        return ((JSON.stringify(nextProps.data) != JSON.stringify(data)) || isShowPop != nextProps.isShowPop || innerHeight || nextState.innerHeight);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isShowPop) {
            this.startAni();
        }
    }

    render() {
        let opacityStyle = this.state.fadeAni.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.618],
        });
        return (
            <Animated.View
                style={[styles.container]}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.stopAni();
                    }}
                >
                    <Animated.View style={{opacity: opacityStyle, flex: 1, width: '100%', backgroundColor: '#000'}}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[{
                        transform: [
                            {
                                translateY: this.state.fadeAni.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [this.state.innerHeight, 0],
                                })
                            }
                        ],
                    }, styles.innerContainer]}
                    onLayout={(event) => {
                        let {nativeEvent: {layout: {height}}} = event;
                        if (height !== this.state.innerHeight) {
                            this.setState({
                                innerHeight:height,
                            },()=>{
                                this.startAni();
                            });
                        }
                    }}
                >
                    {(this.props.data && this.props.data.length > 0) ? (
                        <FlatList
                            style={[{flex: 1, width: '100%', backgroundColor: 'white'}, this.props.innerContainerStyle]}
                            data={this.props.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index}
                        />
                    ) : null}
                </Animated.View>
            </Animated.View>
        );
    }

    _renderItem({item, index}) {
        if (this.props.renderItem) return this.props.renderItem({item, index});
        return (
            <View style={[styles.itemContainer, this.props.itemContainerStyle]}>
                <Text style={styles.item} key={index}>{item}</Text>
            </View>
        );
    }

    startAni() {
        const {isShowPop} = this.props;
        if (isShowPop) {
            this.state.fadeAni.setValue(0);
            Animated.timing(this.state.fadeAni, {
                duration: 500,
                toValue: 1,
            }).start(() => {
                this.props.onAnimation && this.props.onAnimation(true);
            });
        }
    }

    stopAni() {
        if (this.state.fadeAni) this.state.fadeAni.stopAnimation();
        this.state.fadeAni.setValue(1);
        Animated.timing(this.state.fadeAni, {
            duration: 500,
            toValue: 0,
        }).start(() => {
            this.props.onAnimation && this.props.onAnimation(false);
        });
    }

    componentWillMount() {
        if (this.state.fadeAni) this.state.fadeAni.stopAnimation();
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1000,
    },
    innerContainer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'stretch',
        width: '100%',
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        borderBottomColor: '#efefef',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
    },
    item: {
        color: '#000',
        fontSize: 20,
        width: '100%',
    },
});
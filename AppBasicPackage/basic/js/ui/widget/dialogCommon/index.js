/**
 * Created by dai on 2017/10/31.
 */
import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
class ModalExample extends Component{
    constructor(props){
        super(props);
        this.state = {modalVisible:props.visible?props.visible:false};
    }
    setModalVisible(visible) {
        this.setState({modalVisible:visible});
    }

    render() {
        return (
                <Modal  animationType={'slide'}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('modal');
                        }}
                >
                    <View style={{flex:1,justifyContent:'flex-end',marginTop:64,backgroundColor:'red'}}>
                        <View style={{height:200,alignItems:'center',justifyContent:'center',backgroundColor:'blue'}}>
                            <Text style={{textAlign:'center'}}>
                                Hello World!
                            </Text>
                            <TouchableHighlight
                                style={{alignItems:'center',justifyContent:'center'}}
                                onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal!</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                </Modal>

        );
    }
}
export default ModalExample;
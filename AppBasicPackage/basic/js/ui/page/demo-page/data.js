/**
 * @author Yasin
 * @version [React-Native V01, 2017/11/2]
 * @date 2017/11/2
 * @description
 */
import * as Constants from 'BASIC/js/app-navigator/constants';

export default {
    demos: [
        {
            title: 'demo.dialog',
            icon: require('RES/img/icon_dialog.png'),
            target: Constants.DIALOGPAGE,
        },
        {
            title: 'demo.button',
            icon: require('RES/img/icon_button.png'),
            target: Constants.DIALOGPAGE,
        },
        {
            title: 'demo.switch',
            icon: require('RES/img/icon_switch.png'),
            target: Constants.DIALOGPAGE,
        },
        {
            title: 'demo.action_sheet',
            icon: require('RES/img/icon_action_sheet.png'),
            target: Constants.DIALOGPAGE,
        }
    ]
}
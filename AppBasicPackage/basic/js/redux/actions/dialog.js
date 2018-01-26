/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import Constants from '../constants';

const dialogTypes = Constants.dialogTypes;
const showLoadingDialog = (show: boolean) => dispatch => {
    dispatch({
        type: dialogTypes.SHOW_LOADING_DIALOG,
        show: show,
    });
};
export default {
    showLoadingDialog,
}
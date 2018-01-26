/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import Constants from '../constants';

const homeTypes = Constants.homeTypes;
import DialogActions from './dialog';

const homeInitApp = () => dispatch => {
    dispatch(DialogActions.showLoadingDialog(true));
    setTimeout(() => {
        dispatch(DialogActions.showLoadingDialog(false));
    }, 100);
};
const receiverTrip = (data) => dispatch => {
    dispatch({
        type: homeTypes.RECEIVER_TRIP,
        data,
    });
}

const acceptTrip = (accpet = false, data) => dispatch => {
    dispatch({
        type: homeTypes.ACCEPT_TRIP,
        accpet,
        data,
    });
}

export default {
    homeInitApp,
    receiverTrip,
    acceptTrip,
}
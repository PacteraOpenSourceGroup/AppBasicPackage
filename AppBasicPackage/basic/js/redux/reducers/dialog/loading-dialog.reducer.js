/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import createReducer from '../create.reducer';
import Constants from '../../constants';
import {Map, List} from 'immutable';

const dialogTypes = Constants.dialogTypes;
const dialogState = {
    state: {
        showLoadingDialog: false,
    }
};
export const dialogReducer = createReducer(dialogTypes.NAME, dialogState, {
    [dialogTypes.SHOW_LOADING_DIALOG]: (state, action) => {
        let result=state.update('state', d => {
            return Map(d).update('showLoadingDialog', d => action.show);
        }).toJS();
        return result;
    }
});
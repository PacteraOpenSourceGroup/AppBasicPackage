/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */
import {createSelector} from "reselect";

export const selector = state => state.loadingDialogReducer;
export const showLoadingDialog = createSelector(selector, state => state ? state.state.showLoadingDialog : false);

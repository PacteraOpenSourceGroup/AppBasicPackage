/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */
import * as loadingDialogSelector from './loading-dialog.selector';

import * as LoadingReducer from './loading-dialog.reducer';

const loadingDialogReducer = LoadingReducer.dialogReducer;

export {
    loadingDialogSelector,
    loadingDialogReducer,
}
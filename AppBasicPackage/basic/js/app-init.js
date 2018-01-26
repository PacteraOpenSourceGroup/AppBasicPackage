/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description app-init.js
 */
import store from './redux/createStore';
import Actions from './redux/actions';
const dispatchInitActions = dispatch => {
    dispatch(Actions.i18nActions.determineLocale());
    dispatch(Actions.homeActions.homeInitApp());
};
export const initApp = () => {
    //...something
    dispatchInitActions(store.dispatch);
    return {
        store,
    };
};

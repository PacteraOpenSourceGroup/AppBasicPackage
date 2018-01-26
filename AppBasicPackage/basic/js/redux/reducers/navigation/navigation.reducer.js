/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description navigation.reducer.js
 */
import {combineReducers} from 'redux';
import {AppNavigator} from 'BASIC/js/app-navigator';

const nav = (state, action) => {
    // TODO: This reducer is called before AppNavigator is even exisitng?
    if (!AppNavigator) {
        return null;
    }
    const nextState = AppNavigator.router.getStateForAction(action, state);

    return (
        nextState ||
        state ||
        AppNavigator.router.getStateForAction(
            AppNavigator.router.getActionForPathAndParams('Default'),
        )
    );
};

export const navigation = combineReducers({
    nav,
});

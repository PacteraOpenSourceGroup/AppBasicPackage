/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
"use strict";
import {combineReducers} from 'redux';
//react-navigation reducer
import {navigation as nav} from './navigation';
import {homeReducer} from './home';
import {i18nReducer} from './i18n';
import {loadingDialogReducer} from './dialog';
// 获取store
import store from '../createStore';

/**
 * @description
 * 同步的reducer
 * @const {Object}
 **/
const syncReducers: Object = {
    nav,
    homeReducer,
    i18nReducer,
    loadingDialogReducer,
};

/**
 * @description
 * 异步的reducer
 * @const {Object}
 **/
const asyncReducers: Object = {};

/**
 * @function
 * reducer构造器
 * @return {Object} - 组装后的reducer
 **/
const createRootReducer: Object = () =>
    combineReducers({
        ...syncReducers,
        ...asyncReducers
    });

/**
 * @description
 * 按需加载时，立即注入对应的 Reducer
 * @param  {string} key - 需要在State后注入的索引
 * @param  {function} reducer - 需要注入的reducer
 * @param  {boolean} force - 强制增加，即使是之前存在store也去重新创建
 * @return {void}
 */
export const injectReducer: void = (key: string, reducer: Object, force: boolean | null) => {
    if (!asyncReducers[key] || force) {
        asyncReducers[key] = reducer.default ? reducer.default : reducer;
        store.replaceReducer(createRootReducer()); // 替换当前的 rootReducer
    }
};

/**
 * @description
 * 按需加载时，销毁对应的 Reducer
 * @param  {string} key - 需要在State后注入的索引
 * @return {void}
 */
export const deleteReducer: void = (key: string) => {
    if (asyncReducers[key]) {
        delete asyncReducers[key];
        store.replaceReducer(createRootReducer()); // 替换当前的 rootReducer
    }
};

/**
 * @exports
 * 返回一个初始Reducer
 **/
export default createRootReducer();

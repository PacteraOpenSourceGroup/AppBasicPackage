/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description create.reducer.js
 */
"use strict";
import {List, Map} from 'immutable';

/**
 * @description
 * 创建reducer
 * @param {String} name - actionType的根部
 * @param {Object} initState - 初始化状态
 * @param {Object} handlers - reducer改变state的函数，@eg: 必须为纯函数
 * @return {function} - 返回经过改造的reducer
 * @example
 * export default createReducer(accessState, {
*    [USER_ADD_REMEMBER]: (state, action) => {
*       return state.toJS();
*    }
* );
**/
export default (name: String, initState: Object, handlers: Object): Function => (state = initState, action: Object): Object => {
    // 获取对应action
    const handler: Function | any = handlers[action.type];
    if (
        name &&
        Object.prototype.toString.call(action.type).toLowerCase() === "[object string]" &&
        action.type.split('/')[0] === name &&
        handler
    ) {
        // 判断类型增加不可变数据结构
        switch (Object.prototype.toString.call(state).toLowerCase()) {
            case `[object object]`:
                return handler(Map(state), action);
            case `[object array]`:
                return handler(List(state), action);
            default:
                return {...state};
        }
    } else {
        // 没有匹配type直接返回
        return {...state};
    }
};

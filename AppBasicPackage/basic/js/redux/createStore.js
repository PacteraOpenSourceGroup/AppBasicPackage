/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description createStore.js
 */
import {createStore, applyMiddleware, compose} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import middleware from './middleware';
import reducers from './reducers';
import {combineEpics} from 'redux-observable';
import {createEpicMiddleware} from 'redux-observable';
import {fetchUserEpic} from './reducers/home'

/**
 * @description
 * devtools配置
 * @see {@link https://github.com/zalmoxisus/redux-devtools-extension}
 * @const {object}
 **/
const devtools =
    window['devToolsExtension'] && __DEV__
        ? window['devToolsExtension']() : f => f;
export const rootEpic = combineEpics(
    fetchUserEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);
/**
 * @description
 * 配置redux中间件
 **/
const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,
        epicMiddleware,
        // middleware.fetchMiddleware
    ),
    devtools
)(createStore);

/**
 * @exports
 * store
 **/
export default finalCreateStore(reducers, {});

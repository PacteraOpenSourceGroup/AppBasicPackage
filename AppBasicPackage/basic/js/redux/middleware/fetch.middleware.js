/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description fetch.middleware.js
 */
export default (store: Object) => (next: Object) => (action: Object) => {
    return next(action);
};

/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import {createSelector} from "reselect";
export const selector = state => state.i18nReducer;
export const getCurrLocale = createSelector(selector, state => state ? state.locale : 'en');
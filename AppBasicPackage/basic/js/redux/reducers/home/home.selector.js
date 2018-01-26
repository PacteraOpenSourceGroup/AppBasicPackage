/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import {createSelector} from "reselect";

export const selector = state => state.homeReducer;
export const getAppVersion = createSelector(selector, state => state ? state.appName : '');
export const getCanReceiver = createSelector(selector, state => state ? state.state.canReceiver : false);
export const getChoosableTrip = createSelector(selector, state => state ? state.trip.choosableTrip : {});
export const getCurrentTrip = createSelector(selector, state => state ? state.trip.currentTrip : {});

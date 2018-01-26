/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import createReducer from '../create.reducer';
import Constants from '../../constants';
import {Map, List} from 'immutable';

const homeTypes = Constants.homeTypes;
const homeState = {
    state: {
        canReceiver: false,
    },
    trip: {
        choosableTrip: {},
        currentTrip: {},
    },
    data:'',
};
export const homeReducer = createReducer(homeTypes.NAME, homeState, {
    [homeTypes.INIT_APP]: (state, action) => {
        return state.update('state', d => {
            return Map(d).update('canReceiver', d => action.canReceiver);
        }).toJS();
    },
    [homeTypes.RECEIVER_TRIP]: (state, action) => {
        return state.update('trip', d => {
            return action.payload;
        }).toJS();
    },
    [homeTypes.ACCEPT_TRIP]: (state, action) => {
        let resule =  state.update('state', d => Map(d).update('canReceiver', d => false)).update(
            'trip', d => Map(d).update('currentTrip', d => (action.data && action.data.tripId ? action.data : {}))).update(
                'trip', d => {return Map(d).update('choosableTrip', d => {});}).toJS();
        return resule;
    },


});
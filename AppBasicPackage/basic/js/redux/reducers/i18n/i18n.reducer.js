/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description
 */
import createReducer from '../create.reducer';
import Constants from '../../constants';

const i18nTypes = Constants.i18nTypes;
const i18nState = {
    locale: 'en',
};
export const i18nReducer = createReducer(i18nTypes.NAME, i18nState, {
    [i18nTypes.DETERMINE_LOCALE_START]: (state, action) => {
        if (action.languages && action.languages.length > 0) {
            return state.update('locale', d => {
                return action.languages[0];
            }).toJS();
        }
        return state.toJS();
    },
    [i18nTypes.CHOICE_LOCALE]: (state, action) => {
        if (action.locale) {
            return state.update('locale', d => {
                return action.locale;
            }).toJS();
        }
        return state.toJS();
    }
});
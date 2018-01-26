/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/23]
 * @date 2017/10/23
 * @description
 */
import Constants from '../constants';
import {getLanguages} from 'react-native-i18n';

const i18nTypes = Constants.i18nTypes;
const determineLocale = () => dispatch => {
    getLanguages().then(languages => {
        dispatch({
            type: i18nTypes.DETERMINE_LOCALE_START,
            languages,
        });
    });
};
const choiceLocale = (locale) => dispatch => {
    dispatch({
        type: i18nTypes.CHOICE_LOCALE,
        locale,
    });
}
export default {
    determineLocale,
    choiceLocale,
}
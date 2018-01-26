/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/23]
 * @date 2017/10/23
 * @description
 */
import {connect} from 'react-redux';
import actions from 'REDUX/actions';
import {i18nSelector} from 'REDUX/reducers/i18n';
import {i18n} from 'BASIC/js/i18n';

export default function () {
    return connect(state => {
        const currentLocale = i18nSelector.getCurrLocale(state);
        i18n.locale = currentLocale;
        return ({
            currentLocale,
            i18n,
        });
    }, {...actions.homeActions, ...actions.i18nActions})
}
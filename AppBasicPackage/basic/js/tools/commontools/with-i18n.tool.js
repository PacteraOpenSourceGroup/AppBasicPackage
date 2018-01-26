// @flow

import {connect} from 'react-redux';
import {i18nSelector} from 'REDUX/reducers/i18n';
import {i18n} from 'BASIC/js/i18n';

export const withLocalisation = (component: $FlowFixMe) => {
    const mapStateToProps = (state, ownProps) => {
        const currentLocale = i18nSelector.getCurrLocale(state);
        i18n.locale = currentLocale;
        return ({
            currentLocale,
            i18n,
        });
    };

    return connect(mapStateToProps)(component);
};

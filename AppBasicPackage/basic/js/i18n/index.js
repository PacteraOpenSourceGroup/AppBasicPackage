/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/23]
 * @date 2017/10/23
 * @description index.js
 */

import i18n from 'react-native-i18n';
import en from './en';
import de from './de';
import zh from './zh';

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = {
    en,
    de,
    zh,
};

export {i18n};

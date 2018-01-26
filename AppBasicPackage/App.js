/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description App.js
 */
import React from 'react';
import {App} from 'BASIC/js/app.component';
import {initApp} from 'BASIC/js/app-init';

const {store} = initApp();
export function AppContainer() {
    return <App store={store}/>;
}

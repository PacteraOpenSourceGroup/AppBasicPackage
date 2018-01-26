/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/20]
 * @date 2017/10/20
 * @description navigation.selector.js
 */
import type {NavigationState} from 'react-navigation';

export function getNavigationState(state: any): NavigationState {
    return state.nav;
}

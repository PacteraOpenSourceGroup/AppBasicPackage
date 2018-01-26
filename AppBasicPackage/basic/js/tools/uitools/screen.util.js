/**
 * Screen fit
 * @author Winter
 * @version [React-Native V01, 2017/10/23]
 * @date 2017/10/23
 * @description
 */

import {
    Dimensions,
} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
//pixel density
export const DEFAULT_DENSITY = 2;
const w2 = 750 / DEFAULT_DENSITY;
const h2 = 1334 / DEFAULT_DENSITY;

/**
 * Screen fit
 * @param size (pixel)
 * @return {number}  After conversion size
 */
export function scaleSize(size: Number) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}
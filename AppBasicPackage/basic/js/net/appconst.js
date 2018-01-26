/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */
export const DEBUG_MODE = false;
let AppConst = {
    version: '1.0.0',
};
if (DEBUG_MODE) {
    Object.assign(AppConst, {
        BASE_URL: 'https://odm.int-bmw-carsharing.com' //测试环境
    });
} else {
    Object.assign(AppConst, {
        BASE_URL: 'https://odm.int-bmw-carsharing.com'     //生产环境
    });
}
export default AppConst;

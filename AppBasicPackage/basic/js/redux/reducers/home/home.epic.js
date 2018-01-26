/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/30]
 * @date 2017/10/30
 * @description
 */
import {Observable} from 'rxjs';
import Types from '../../constants';

const dialogTypes = Types.dialogTypes;
const homeTypes = Types.homeTypes;

export const fetchUserEpic = action$ =>
    action$.ofType(homeTypes.INIT_APP)
        .mergeMap(action =>

            Observable.fromPromise(fetch('https://zhuanlan.zhihu.com/p/22437186', {method: 'GET'}).then(response => {
                return response.text();
            }).catch((erro) => {
                console.log(erro);
            })).map((data) => {
                return {
                    type: homeTypes.ACCEPT_TRIP,
                    payload: data,
                };
                ;
            })
        )
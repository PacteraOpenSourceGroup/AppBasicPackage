/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */

import Actions from 'REDUX/actions';
import store from 'REDUX/createStore';
import AppConst from './appconst';

export default class BaseRequest {
    // 构造
    constructor(body, method, mode) {
        //关闭打印信息，自己想要加上但别提上去，多了调试起来不方便，且要加上__DEV__不然生产环境一堆log
        this.log = true;
        //是否终止请求 默认false
        this.isCancled = false;
        //请求失败是否打印后台message 默认false
        this.isShowMessage = false;
        if (body == null) {
            body = {};
        }

        //当没有指定请求方法的时候默认post
        if (method == null) {
            method = 'POST';
        }
        if (mode == null) {
            mode = 'cors';
        }
        this.method = method;
        this.body = body;
        this.mode = mode;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    }

    /**
     * 请覆盖此方法
     */
    requestUrl() {
        throw ({message: 'function requestUrl must be overrided!'});
    }

    /**
     * 开启loadingdialog
     * @returns {BaseRequest}
     */
    showLoadingView() {
        this.isShowing = true;
        store.dispatch(Actions.dialogActions.showLoadingDialog(true))
        return this;
    }

    /**
     * 关闭dialog
     * @returns {BaseRequest}
     */
    dismissLoadingView() {
        this.isShowing = false;
        store.dispatch(Actions.dialogActions.showLoadingDialog(false))
        return this;
    }


    /**
     * 开始请求
     * @param successCallBack 成功后的回调
     * @param failCallBack 失败后的回调
     * @returns {BaseRequest}
     */
    async start(successCallBack, failCallBack) {
        try {
            let url = this.getBaseUrl() + this.requestUrl();
            if ('GET' === this.method) {
                let str = this.toQueryString(this.body);
                if (str && str.length > 0) url += '?' + str;
            }
            this.showLog('requestUrl==>' + url);
            this.showLog(this.body);
            let response = await fetch(url, {
                headers: this.headers,
                method: this.method,
                mode: this.mode,
                body: this.method == 'GET' ? null : JSON.stringify(this.body),
                timeout: 40 * 1000,
                credentials: 'include'
            });
            let responseJson = await response.json();
            this.showLog('response==>' + responseJson);
            this.showLog(responseJson);
            if (this.isShowing) {
                this.dismissLoadingView();
            }
            if (responseJson && !this.isCancled) {
                this.handleResponse(responseJson, successCallBack, failCallBack);
            } else {
                if (failCallBack && !this.isCancled) failCallBack('请求失败');
            }
        } catch (erro) {
            if (this.isShowing) {
                this.dismissLoadingView();
            }
            this.showLog('erro==>');
            this.showLog(erro);
            if (failCallBack && !this.isCancled) failCallBack(erro);
        }
        return this;
    }

    /**
     * 处理response
     * @param responseJson
     * @param successCallBack
     */
    handleResponse(responseJson, successCallBack, failCallBack) {
        if (this.isShowing) {
            this.dismissLoadingView();
        }
        if (successCallBack) successCallBack(responseJson);
    }

    /**
     * 用于对对象编码以便进行传输
     * @param obj 对象参数
     * @returns {string} 返回字符串
     */
    toQueryString(obj) {
        let str = '';
        if (obj) {
            let keys = [];
            for (let key in obj) {
                keys.push(key);
            }
            keys.forEach((key, index) => {
                str += key + '=' + obj[key];
                if (index !== keys.length - 1) {
                    str += '&';
                }
            });
        }
        return str;
    }

    /**
     * 打印log信息
     * @param log
     */
    showLog(log) {
        if (__DEV__ && this.log) {
            console.log(log);
        }
    }

    /**
     * 返回baseurl
     */
    getBaseUrl() {
        return AppConst.BASE_URL;
    }

}

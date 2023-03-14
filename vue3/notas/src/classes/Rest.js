import { Cookie } from "./Cookie";
import axios from "axios";

class Rest {

    static getHeaders() {
        return {
            'Authorization': `Bearer ${Cookie.get('Authorization')}`
        };
    }

    static post(url, data) {
        return this._rest({
            method: 'post',
            url: url,
            data: data,
            headers: this.getHeaders()
        });
    }

    static patch(url, data) {
        return this._rest({
            method: 'patch',
            url: url,
            data: data,
            headers: this.getHeaders()
        });
    }

    static get(url) {
        return this._rest({
            method: 'get',
            url: url,
            headers: this.getHeaders()
        });
    }

    static delete(url) {
        return this._rest({
            method: 'delete',
            url: url,
            headers: this.getHeaders()
        });
    }

    static _rest(options) {
        return new Promise(function (resolve, reject) {
            axios(options)
                .then(response => {
                    Cookie.set('Authorization', response['data']['accessToken']);
                    resolve(response['data']);
                })
                .catch(e => {
                    reject(e.response.data);
                });
        });
    }

}



export default Rest;
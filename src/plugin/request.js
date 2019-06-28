import axios from 'axios'

/**
 * 统一拦截错误码
 * @param vm vue实例
 * @param status 状态码
 */
let parseStatusCode = (vm, data, status) => {
	// 判断请求状态码
	if (status === 200) {
		return data.data
	}
}
export default {
	install: function (Vue) {
		Vue.prototype.$request = function (url, config, ignoreLoading) {

			// 指定浏览器前缀
			const apiPrefix = '/api';

			// 请求默认配置
			config = config || {};

			// header token
			config.headers = config.headers || {};
			// 请求默认携带token
			config.headers.token = 111;

			if (!config.ignoreApiPrefix) {
				config.url = apiPrefix + url;
			} else {
				config.url = url;
			}

			return axios.request(config).then((response) => {

				// 根据响应的状态码返回不同消息
				let data = response.data;

				// 二进制大对象 BLOB (binary large object)
				if (config.responseType === 'blob') {
					return;
				}

				return parseStatusCode(this, data, response.status);
			}).catch((response) => {
				// 当请求报错, 自动设置loading状态

			})
		}

		Vue.prototype.$get = function (url, config, ignoreLoading) {
			config = Object.assign({}, config, {
				method: 'get'
			})
			return this.$request(url, config, ignoreLoading)
		}
	}
}
import axios from './axios'
import qs from 'qs'

export default async(url, params = {}, method = 'POST', isUpload = false) => {
	method = method.toUpperCase();
	if (method === 'GET') {
		const res = await axios.get(url, {
			params
		});
		return res.data
	}else if(method === 'POST') {
		const normal = { 
			transformRequest: [
			function(data) { 
				return qs.stringify(data) 
			}
		]};
		const upload = { 
			headers: {
				'Content-Type':'multipart/form-data'
			}
		};
		const res = await axios.post(url, params, isUpload ? upload : normal);
		return res.data
	}
}

// `transformRequest`允许在请求数据发送到服务器之前对其进行更改
// 这只适用于请求方法'PUT'，'POST'和'PATCH'
// 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream
 
// transformRequest: [function (data) {
// // 做任何你想要的数据转换
 
// return data;
// }],
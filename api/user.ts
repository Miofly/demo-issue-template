import {UserLoginFormData, UserRegFormData} from "~/types";

export default ({$axios}, inject) => {
  inject('login', (data: UserLoginFormData) => $axios({
    url: '/user/login',
    method: 'post',
    headers: {
      needToken: false
    },
    data: data
  }));

  inject('register', (data: UserRegFormData) => $axios({
    url: '/user/register',
    method: 'post',
    headers: {
      needToken: false
    },
    data: data
  }));

  inject('getInfo', () => $axios({
    url: '/user/getInfo',
    method: 'get',
    headers: {
      needToken: true
    }
  }));

}

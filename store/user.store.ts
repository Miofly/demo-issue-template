import {defineStore} from "pinia";
import {UserInfo, UserLoginFormData} from "~/types/user.interface";
import {getToken, removeToken, setToken} from "~/utils/token";

interface UserStoreInterface {
  userInfo: UserInfo | null,
  token: string | null,
}


const useUserStore = defineStore('userStore', {
  state: (): UserStoreInterface => {
    return {
      userInfo: null,
      token: getToken() || null
    }
  },

  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getToken(state) {
      return state.token;
    }
  },

  actions: {
    // $nuxt是nuxt app的全局变量
    Login(data: UserLoginFormData) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        $nuxt.$login(data).then(res => {
          const token: string | null = res.data;
          if(token) setToken(token);
          this.token = token;
          resolve(res);
        }).catch(error => {
          reject(error);
        });
      });
    },

    GetInfo() {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        $nuxt.$getInfo().then(res => {
          const data = res.data;
          this.userInfo = {
            id: data.id,
            username: data.username,
            nickname: data.nickname,
            password: data.password,
            email: data.email,
            phone: data.phone,
            age: data.age,
            gender: data.gender,
            avatar: data.avatar,
            introduction: data.introduction,
            address: data.address,
            roleId: data.roleId
          };
          resolve(res);
        }).catch(error => {
          reject(error);
        })
      });
    },

    Logout() {
      return new Promise((resolve) => {
        this.token = '';
        removeToken();
        resolve(null);
      })
    }
  }
});

export default useUserStore;

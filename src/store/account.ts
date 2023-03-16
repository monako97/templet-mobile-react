import { isFunction } from 'PackageNameByCommon';
import { sso } from 'PackageNameByCore';
import type { ResponseBody } from '@/services';
import { loginByUserName, type LoginByUserNameParams } from '@/services/user';
import { global } from '@/store';

export declare interface UserInfo {
  address?: string;
  avatar?: string;
  birthday?: number;
  code?: string;
  comment?: string;
  create_time?: number;
  email?: string;
  id: number;
  last_active_ip?: string;
  last_active_time?: number;
  password?: string;
  phone?: string;
  status?: number;
  update_time?: number;
  description?: string;
  username: string;
}

// eslint-disable-next-line no-unused-vars
export type Callback<T> = (resp: ResponseBody<T>) => void;

export const account = sso({
  /** 用户信息 */
  info: null as UserInfo | null,
  /** 登出账号
   * @constructor
   */
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    account.info = null;
    global.isLogin = false;
  },
  loginUsername: async (data: LoginByUserNameParams, callback?: Callback<UserInfo>) => {
    const resp = await loginByUserName(data);

    if (resp.success) {
      account.info = resp.result;
      global.isLogin = true;
    }
    if (isFunction(callback)) {
      return callback(resp);
    }
  },
});

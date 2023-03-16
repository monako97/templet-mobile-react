import { request, type ResponseBody } from '@/services';
import { type UserInfo } from '@/store';

export type LoginByUserNameParams = {
  username: string;
  password: string;
};

// 用户名登录
export const loginByUserName = async (params: LoginByUserNameParams) =>
  request<ResponseBody<UserInfo>>('/login_by_username', {
    data: params,
    method: 'POST',
  });

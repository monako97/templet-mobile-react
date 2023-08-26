import sso from 'shared-store-object';

export const global = sso({
  /** 是否已登录用户, 默认值：读取持久化数据 */
  isLogin: !!localStorage.getItem('global.isLogin'),
});

import { persistence } from 'PackageNameByCommon';
import { sso } from 'PackageNameByCore';

/** 持久化数据key */
export const globalPersistenceKey = 'global.isLogin';
export const global = sso({
  /** 是否已登录用户, 默认值：读取持久化数据 */
  isLogin: persistence.load(globalPersistenceKey, false),
});

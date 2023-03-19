// import { persistence } from 'PackageNameByCommon';
// import { localizable, menu, persistentKey } from 'PackageNameByCore';
import fastClick from 'fastclick';
// import { account, accountPersistenceKey, global, globalPersistenceKey } from '@/store';

fastClick.attach(document.body);
/** 数据持久化 */
// window.addEventListener('unload', function () {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const obj: Record<string, any> = {
//     [accountPersistenceKey]: account.info,
//     [globalPersistenceKey]: global.isLogin,
//   };

//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       persistence.set(key, obj[key]);
//     }
//   }
// });

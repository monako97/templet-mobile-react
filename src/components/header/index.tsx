import * as styles from './index.less';
import * as React from 'react';
import localizable from 'app:locales';
import { useLocation } from '@moneko/react';
import { matchUtil } from '../navigate-bar';

const Header = () => {
  const { t } = localizable;
  const l = useLocation();
  const k = React.useMemo(() => matchUtil(l.pathname).key, [l.pathname]);

  return <header className={styles.header}>{k ? t[k] : k}</header>;
};

export default Header;

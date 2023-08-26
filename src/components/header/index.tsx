import React, { useMemo } from 'react';
import localizable from '@app/locales';
import { useLocation } from 'react-router-dom';
import styles from './index.less';
import { matchUtil } from '../navigate-bar';

const Header = () => {
  const { t } = localizable;
  const l = useLocation();
  const k = useMemo(() => matchUtil(l.pathname).key, [l.pathname]);

  return <header className={styles.header}>{k ? t[k] : k}</header>;
};

export default Header;

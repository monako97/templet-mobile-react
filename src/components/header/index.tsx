import React, { useMemo } from 'react';
import styles from './index.less';
import { matchUtil, useLocation, useLocale } from 'PackageNameByCore';

const Header = () => {
  const l = useLocation();
  const { getLanguage } = useLocale();
  const match = useMemo(() => {
    return matchUtil(l.pathname);
  }, [l.pathname]);

  return <header className={styles.header}>{getLanguage(match.i18n || match.key)}</header>;
};

export default Header;

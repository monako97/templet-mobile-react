import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { matchUtil, useLocation, useLocale } from 'plugin-runtime';
import type { RouterProps } from 'plugin-runtime';

const Header = () => {
  const [match, setMatch] = useState<RouterProps>({ key: 'route-home' });
  const l = useLocation();
  const { getLanguage } = useLocale();

  useEffect(() => {
    const _match = matchUtil(l.pathname);

    setMatch(_match);
  }, [l.pathname]);

  return (
    <header className={styles.header}>{getLanguage(match.i18n || match.title || match.key)}</header>
  );
};

export default Header;

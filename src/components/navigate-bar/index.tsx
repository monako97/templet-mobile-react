import React, { useMemo } from 'react';
import { matchUtil, useLocation, useNavigate, useLocale } from 'plugin-runtime';
import styles from './index.less';

function createHash(hashLength = 24) {
  return Array.from(Array(Number(hashLength)), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join('');
}

const btns = [
  {
    path: `dynamic/${createHash()}`,
    key: 'dynamic/:id',
    title: '页面1',
  },
  {
    path: `dynamic/${createHash()}/${createHash()}`,
    key: 'dynamic/:id/:name',
    title: '页面2',
  },
  {
    path: `home`,
    key: 'home',
    title: '首页',
  },
  {
    path: `home/dynamic/${createHash()}`,
    key: 'home/dynamic/:id',
    title: '页面3',
  },
  {
    path: `home/dynamic/${createHash()}/${createHash()}`,
    key: 'home/dynamic/:id/:name',
    title: '页面4',
  },
];

const NavigatorBar = () => {
  const navigate = useNavigate();
  const { getLanguage } = useLocale();
  const jumpText = getLanguage('jump');
  const l = useLocation();
  const match = useMemo(() => {
    return matchUtil(l.pathname);
  }, [l.pathname]);

  return (
    <footer className={styles.navs}>
      {btns.map((item) => {
        return (
          <button
            key={item.key}
            className={match.key === item.key ? styles.active : ''}
            onClick={() => navigate(item.path)}
          >
            <span className="text-ellipsis">{item.title}</span>
            <i>{jumpText}</i>
          </button>
        );
      })}
    </footer>
  );
};

export default NavigatorBar;

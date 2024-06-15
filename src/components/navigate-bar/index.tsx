import * as styles from './index.less';
import * as React from 'react';
import localizable from '@app/locales';
import { Link, useLocation } from '@moneko/react';

function createHash() {
  return Math.random().toString(36).substring(2);
}
const btns = [
  {
    path: `/dynamic/${createHash()}`,
    key: 'dynamic/:id',
  },
  {
    path: `/dynamic/${createHash()}/${createHash()}`,
    key: 'dynamic/:id/:name',
  },
  {
    path: '/home',
    key: 'home',
  },
  {
    path: `/home/dynamic/${createHash()}`,
    key: 'home/dynamic/:id',
  },
  {
    path: `/home/dynamic/${createHash()}/${createHash()}`,
    key: 'home/dynamic/:id/:name',
  },
];

function pathToRegexp(path: string) {
  const keys: string[] = [];
  const pattern = path
    .replace(/:[^\s/]+/g, (match) => {
      keys.push(match.substring(1));
      return '([^\\s/]+)';
    })
    .replace(/\//g, '\\/');

  return new RegExp(`^${pattern}$`);
}
type MatchPath = {
  path?: string;
  key?: string;
  children?: MatchPath[];
};
export function matchUtil(pathname: string): MatchPath {
  let p: MatchPath = { key: '' };

  function findPath(rs: MatchPath[]) {
    for (let i = 0, len = rs.length; i < len; i++) {
      if (rs[i].path && rs[i].path !== '*' && rs[i].key) {
        try {
          if (pathToRegexp(rs[i].key!).exec(pathname.substring(1) as string)) {
            p = rs[i];
            return;
          }
        } catch (error) {
          /* empty */
        }
      }
      if (Array.isArray(rs[i].children)) {
        findPath(rs[i].children!);
      }
    }
  }

  findPath(btns);
  return p;
}

const NavigatorBar = () => {
  const { t } = localizable;
  const l = useLocation();

  return (
    <footer className={styles.navs}>
      {btns.map(function (item) {
        return (
          <Link
            key={item.key}
            className={[styles.link, matchUtil(l.pathname).key === item.key && 'active']
              .filter(Boolean)
              .join(' ')}
            to={item.path}
          >
            <span className={styles.label}>{t[item.key]}</span>
            <span className={styles.subTitle}>{t.jump}</span>
          </Link>
        );
      })}
    </footer>
  );
};

export default NavigatorBar;

import React, { useMemo } from 'react';
import { css } from '@emotion/css';
import { classNames } from 'PackageNameByCommon';
import { Link, matchUtil, useLocation, localizable } from 'PackageNameByCore';

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
    path: `/home`,
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

const navs = css`
  position: sticky;
  bottom: 8px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 8px calc(8px + var(--area-padding-bottom));
  border-radius: var(--border-radius);
  padding: 8px;
  width: calc(100% - 16px);
  height: var(--footer-height);
  background-color: rgb(255 255 255 / 70%);
  box-shadow: 0 0 10px 10px rgb(0 0 0 / 1%);
  line-height: initial;
  backdrop-filter: blur(16px);
  box-sizing: border-box;
  gap: 8px;
`;
const link = css`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: var(--border-radius);
  text-align: center;
  color: var(--text-color);
  flex: 1;
  cursor: pointer;

  &:hover,
  &.active {
    color: #fff;
    background-color: var(--primary-color, #6495ed);
  }
`;
const label = css`
  font-size: 16px;
  font-weight: bold;
`;
const subTitle = css`
  display: block;
  font-size: 10px;
  opacity: 0.6;
`;
const NavigatorBar = () => {
  const { t } = localizable;
  const l = useLocation();
  const match = useMemo(
    function () {
      return matchUtil(l.pathname);
    },
    [l.pathname]
  );

  return (
    <footer className={navs}>
      {btns.map(function (item) {
        return (
          <Link
            key={item.key}
            className={classNames(link, match.key === item.key && 'active')}
            to={item.path}
          >
            <span className={label}>{t[`route-${item.key}`]}</span>
            <span className={subTitle}>{t.jump}</span>
          </Link>
        );
      })}
    </footer>
  );
};

export default NavigatorBar;

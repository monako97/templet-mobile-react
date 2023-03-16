import React, { useMemo } from 'react';
import { css } from '@emotion/css';
import { localizable, matchUtil, useLocation } from 'PackageNameByCore';

const header = css`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--area-padding-top);
  width: 100%;
  height: var(--header-height);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: var(--text-color);
  background-color: rgb(255 255 255 / 70%);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 1%);
  backdrop-filter: blur(16px);
`;

const Header = () => {
  const { t } = localizable;
  const l = useLocation();
  const match = useMemo(() => matchUtil(l.pathname), [l.pathname]);

  return <header className={header}>{t[match.i18n || match.key]}</header>;
};

export default Header;

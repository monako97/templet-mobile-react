import React from 'react';
import { css } from '@emotion/css';
import { useOutlet, localizable } from 'PackageNameByCore';
import Header from '@/components/header';
import NavigatorBar from '@/components/navigate-bar';
import './global.css';

const body = css`
  position: relative;
  display: flex;
  overflow-y: auto;
  height: 100%;
  flex-direction: column;
`;
const view = css`
  padding: var(--main-padding-top) 8px var(--main-padding-bottom);
  flex: 1;
`;
const App = () => {
  const outlet = useOutlet();
  const { locales, set, language } = localizable;

  return (
    <div className={body}>
      <Header />
      <main className={view}>
        {locales.map((item) => (
          <label key={item.language} form="lang">
            <input
              type="radio"
              name="lang"
              value={item.language}
              onClick={() => set(item.language)}
              checked={item.language === language}
            />
            {item.title}:<span>{item.language}</span>
          </label>
        ))}
        {outlet}
      </main>
      <NavigatorBar />
    </div>
  );
};

export default App;

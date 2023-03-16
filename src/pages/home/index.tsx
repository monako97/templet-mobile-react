import React, { type FC, useEffect } from 'react';
import { localizable, useOutlet } from 'PackageNameByCore';
import { account } from '@/store';

const Home: FC = () => {
  const { info } = account;
  const outlet = useOutlet();
  const { t } = localizable;

  useEffect(() => {
    account.loginUsername({
      username: 'admin',
      password: '123456a',
    });
  }, []);
  return (
    <>
      <div>
        <details>
          <summary>{t['user-info']}</summary>
          <pre>
            <code>{JSON.stringify(info, null, 4)}</code>
          </pre>
        </details>
        <details>
          <summary>Location</summary>
          <pre>
            <code>{JSON.stringify(window.location, null, 4)}</code>
          </pre>
        </details>
      </div>

      {outlet && (
        <div>
          {t['sub-page-view']}
          {outlet}
        </div>
      )}
    </>
  );
};

export default Home;

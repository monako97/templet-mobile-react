import React from 'react';
import { useLocale, useOutlet, useSelector, shallowEqual } from 'plugin-runtime';
import styles from './index.less';
import type { UserModelType } from '@/models/user';

const Home: React.FC = () => {
  const outlet = useOutlet();
  const { getLanguage } = useLocale();
  const userInfo = useSelector((state: { user: UserModelType }) => state.user, shallowEqual);

  return (
    <React.Fragment>
      <div className={styles.details}>
        <details>
          <summary>{getLanguage('user-info')}</summary>
          <pre>
            <code>{JSON.stringify(userInfo, null, 4)}</code>
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
          {getLanguage('sub-page-view')}
          {outlet}
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;

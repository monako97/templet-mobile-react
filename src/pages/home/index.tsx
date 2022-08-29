import React, { useEffect } from 'react';
import { useLocale, useOutlet, useSelector, shallowEqual, useDispatch } from 'plugin-runtime';
import styles from './index.less';
import type { UserModelType } from '@/models/user';

const Home: React.FC = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();
  const { getLanguage } = useLocale();
  const userInfo = useSelector((state: { user: UserModelType }) => state.user, shallowEqual);

  useEffect(() => {
    dispatch({
      type: 'user/fetchLoginByUserName',
      payload: {
        data: {
          username: 'admin',
          password: 'adminpsw',
        },
      },
    });
  }, [dispatch]);
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

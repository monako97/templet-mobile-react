import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import sso from 'shared-store-object';
import { matchUtil } from '@/components/navigate-bar';

const btn = sso({
  count: 0,
});
const Test = () => {
  const l = useLocation();
  const match = useMemo(() => matchUtil(l.pathname), [l.pathname]);

  return (
    <div onClick={() => btn.count++}>
      <h4>子路由的子页面</h4>
      click: {btn.count}
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Test;

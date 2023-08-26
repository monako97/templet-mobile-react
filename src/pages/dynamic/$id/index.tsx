import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { matchUtil } from '@/components/navigate-bar';

const Test = () => {
  const l = useLocation();
  const match = useMemo(() => matchUtil(l.pathname), [l.pathname]);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
      <Outlet />
    </div>
  );
};

export default Test;

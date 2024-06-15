import * as React from 'react';
import { Outlet, useLocation } from '@moneko/react';
import { matchUtil } from '@/components/navigate-bar';

const Test = () => {
  const l = useLocation();
  const match = React.useMemo(() => matchUtil(l.pathname), [l.pathname]);

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

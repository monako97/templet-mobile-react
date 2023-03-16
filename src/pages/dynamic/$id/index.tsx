import React, { type FC } from 'react';
import { useOutlet, useMatch } from 'PackageNameByCore';

const Test: FC<{ path: string }> = ({ path }) => {
  const match = useMatch({
    path: path,
    end: false,
  });
  const outlet = useOutlet();

  return (
    <div>
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
      {outlet}
    </div>
  );
};

export default Test;

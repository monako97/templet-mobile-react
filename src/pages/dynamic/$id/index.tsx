import React from 'react';
import { useOutlet, useMatch } from 'plugin-runtime';

const Test: React.FC<PureComponentProps> = ({ path }: PureComponentProps) => {
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

import React, { useState } from 'react';
import { useMatch } from 'plugin-runtime';

const Test: React.FC<PureComponentProps> = ({ path }: PureComponentProps) => {
  const [a, setA] = useState(0);
  const match = useMatch(path);

  return (
    <div onClick={() => setA(a + 1)}>
      <h4>子路由的子页面</h4>
      click: {a}
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Test;

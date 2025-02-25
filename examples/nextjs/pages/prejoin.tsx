import * as React from 'react';
import { PreJoin, setLogLevel } from '@livekit/components-react';
import type { NextPage } from 'next';

const PreJoinExample: NextPage = () => {
  setLogLevel('debug', { liveKitClientLogLevel: 'warn' });

  return (
    <div data-lk-theme="default" style={{ height: '100vh' }}>
      <PreJoin />
    </div>
  );
};

export default PreJoinExample;

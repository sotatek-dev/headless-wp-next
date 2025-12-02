'use client';

import { useEffect } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const init = async () => {
      if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_MOCKING_ENABLED === 'true') {
        const { worker } = await import('@/mocks/browser');
        await worker.start({ onUnhandledRequest: 'bypass' });
      }
    };

    init();
  }, []);

  return <>{children}</>;
}

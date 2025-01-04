'use client';

import type { FC } from 'react';

import { ServerStatusView } from '@/app/admin/components';
import { useFeatures } from '@/src/hooks/useFeatures.ts';

const DbStatusView: FC<unknown> = () => {
  const { featuresAvailable } = useFeatures();

  return (
    <>
      {featuresAvailable(['canViewDbStatus']) && (
        <>
          <ServerStatusView
            status={'ok'}
            title={'База данных'}
          />
        </>
      )}
    </>
  );
};

export default DbStatusView;

'use client';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

import { ServerStatusView } from '@/app/admin/components';
import { useFeatures } from '@/src/hooks/useFeatures.ts';
import { AnalyticsService } from '@/src/services/analytics.service.ts';

const DbStatusView: FC<unknown> = () => {
  const { featuresAvailable } = useFeatures();

  const { data: dbStatus } = useQuery({
    queryKey: ['analytics', 'dbStatus'],
    queryFn: () => AnalyticsService.getDbStatus(),
  });

  return (
    <>
      {featuresAvailable(['canViewDbStatus']) && (
        <>
          <ServerStatusView
            status={dbStatus ?? 'none'}
            title={'База данных'}
          />
        </>
      )}
    </>
  );
};

export default DbStatusView;

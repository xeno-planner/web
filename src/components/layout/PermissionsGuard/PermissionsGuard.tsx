'use client';

import { useRouter } from 'next/navigation';
import { type FC, useEffect } from 'react';

import { useFeatures } from '@/src/hooks/useFeatures.ts';
import type { AppFeature } from '@/src/services/feature.service.ts';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

const PermissionsGuard: FC<{ features: AppFeature[] }> = ({ features }) => {
  const { push } = useRouter();
  const { data: userFeats } = useFeatures();

  useEffect(() => {
    if (!userFeats) {
      return;
    }

    for (const reqFeat of features) {
      // User has not required permission
      if (!userFeats?.[reqFeat]) {
        push(DASHBOARD_PAGES.HOME);
      }
    }
  });

  return <></>;
};

export default PermissionsGuard;

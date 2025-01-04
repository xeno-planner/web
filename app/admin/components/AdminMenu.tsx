'use client';

import type { ComponentProps, FC } from 'react';

import type DashboardMenu from '@/src/components/layout/DashboardMenu';
import { traverseNavItems } from '@/src/components/layout/DashboardMenu/DashboardMenu.utils.tsx';
import {
  adminBottomMenuData,
  dashboardBottomMenuData,
} from '@/src/components/layout/DashboardMenu/dashboard.menu.data.ts';
import { Divider } from '@/src/components/ui';
import { useFeatures } from '@/src/hooks/useFeatures.ts';

const AdminMenu: FC<Pick<ComponentProps<typeof DashboardMenu>, 'variant'>> = ({
  variant,
}) => {
  const { data } = useFeatures();

  const canAccess = !!data?.canAccessAdminPage;

  return (
    <>
      {canAccess ? (
        <>
          <Divider />
          {traverseNavItems(
            variant === 'admin' ? adminBottomMenuData : dashboardBottomMenuData,
          )}
        </>
      ) : undefined}
    </>
  );
};

export default AdminMenu;
